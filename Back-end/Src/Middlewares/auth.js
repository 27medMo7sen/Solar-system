import userModel from "../../models/User.js";
import { generateToken, verifyToken } from "../Utils/tokenFunctions.js";
export const isAuth = (roles) => {
  return async (req, res, next) => {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        return next(new Error("Please login first", { cause: 400 }));
      }

      if (!authorization.startsWith(process.env.TOKEN_PREFIX)) {
        return next(new Error("invalid token prefix", { cause: 400 }));
      }

      const splitedToken = authorization.split(" ")[1];
      try {
        const decodedData = verifyToken({
          token: splitedToken,
          signature: process.env.SIGN_IN_TOKEN_SECRET,
        });

        const findUser = await userModel.findById(
          decodedData._id,
          "email role token"
        );
        if (!findUser) {
          return next(new Error("Please SignUp", { cause: 400 }));
        }
        if (findUser.token != splitedToken) {
          return next(new Error("Please login first", { cause: 400 }));
        }

        req.user = findUser;
        if (roles && !roles.includes(findUser.role)) {
          return next(
            new Error("You are not authorized to access this route", {
              cause: 403,
            })
          );
        }
        next();
      } catch (error) {
        let refreshed = false;
        // here we check if the token is expired we will refresh it and update it in the DB and continue the request to the next middleware
        if (error == "TokenExpiredError: jwt expired") {
          const user = await userModel.findOne({ token: splitedToken });
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
              new Error("token generation fail, payload canot be empty", {
                cause: 400,
              })
            );
          }

          const modifiedUser = await userModel.findByIdAndUpdate(user._id, {
            token: userToken,
          });
          // set the new token in the cookie to update the token in the client side
          await res.cookie("userToken", userToken, {
            maxAge: 1000 * 60 * 60 * 2,
            path: "/",
            sameSite: "Lax",
            secure: true,
          });
          refreshed = true;
          req.user = modifiedUser;
          console.log("refresh tokennnn");
        }
        // if the token is invalid we will return an error
        if (!refreshed) return next(new Error("invalid token", { cause: 428 }));
        // otherwise we will continue the request to the next middleware
        next();
      }
    } catch (error) {
      console.log(error);
      next(new Error("catch error in auth", { cause: 500 }));
    }
  };
};
