import accountModel from "../Modules/Auth/account.schema.js";
import { generateToken, verifyToken } from "../Utils/tokenFunctions.js";

export const isAuth = (roles) => {
  return async (req, res, next) => {
    try {
      if (!roles.includes("Guest")) {
        console.log(req.headers); 
        const { authorization } = req.headers;
        if (!authorization) {
          console.log("no auth");
          return next(new Error("Please login first", { cause: 400 }));
        }

        if (!authorization.startsWith(process.env.TOKEN_PREFIX)) {
          return next(new Error("invalid token prefix", { cause: 400 }));
        }

        const splitedToken = authorization.split(" ")[1];
        let decodedData;
        try {
          decodedData = verifyToken({
            token: splitedToken,
            signature: process.env.SIGN_IN_TOKEN_SECRET,
          });
        } catch (error) {
          if (error.message === "jwt expired") {
            const user = await accountModel.findOne({ token: splitedToken });
            if (!user) {
              return next(new Error("Wrong token", { cause: 400 }));
            }
            // generate new token
            const userToken = generateToken({
              payload: {
                email: user.email,
                _id: user._id,
              },
              signature: process.env.SIGN_IN_TOKEN_SECRET,
              expiresIn: "1h",
            });

            if (!userToken) {
              return next(
                new Error("token generation fail, payload cannot be empty", {
                  cause: 400,
                })
              );
            }

            await accountModel.findByIdAndUpdate(user._id, {
              token: userToken,
            });

            // set the new token in the cookie to update the token on the client side
            res.cookie("userToken", userToken, {
              maxAge: 1000 * 60 * 60 * 2,
              path: "/",
              sameSite: "Lax",
              secure: true,
            });

            decodedData = verifyToken({
              token: userToken,
              signature: process.env.SIGN_IN_TOKEN_SECRET,
            });
          } else {
            return next(new Error("invalid token", { cause: 428 }));
          }
        }

        const findUser = await accountModel.findById(
          decodedData._id,
          "email role token"
        );
        if (!findUser) {
          return next(new Error("Please SignUp", { cause: 400 }));
        }
        if (findUser.token !== splitedToken) {
          return next(new Error("Please login first", { cause: 400 }));
        }

        req.user = findUser;
        if (
          roles &&
          !roles.includes(findUser.role) &&
          !roles.includes("Guest")
        ) {
          return next(
            new Error("You are not authorized to access this route", {
              cause: 403,
            })
          );
        }
      }
      next();
    } catch (error) {
      console.log(error);
      next(new Error("catch error in auth", { cause: 500 }));
    }
  };
};
