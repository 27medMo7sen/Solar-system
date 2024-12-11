import userModel from "../User/user.schema.js";
import accountModel from "./account.schema.js";
import { hashSync, compareSync } from "bcrypt";
import { emailTemplate } from "../../Utils/emailTemplate.js";
import { generateToken, verifyToken } from "../../Utils/tokenFunctions.js";
import { sendEmailServices } from "../../Services/sendEmailService.js";
// MARK:signup
export const signUp = async (req, res, next) => {
  const { first_name, last_name, phone_number, email, password } = req.body;
  console.log(first_name, last_name, phone_number, email, password);
  const findAcc = await accountModel.findOne({ email });
  if (findAcc) {
    return next(new Error("User already exists"));
  }
  const hashedPassword = hashSync(password, 10);
  console.log(findAcc);
  const user = await userModel.create({
    first_name,
    last_name,
    phone_number,
  });
  if (!user) {
    return next(new Error("User not created", { code: 500 }));
  }
  const account = await accountModel.create({
    email,
    password: hashedPassword,
    role: "Customer",
    profile: user,
  });
  if (!account) {
    return next(new Error("User not created", { code: 500 }));
  }
  const token = generateToken({
    payload: { email },
    signature: process.env.CONFIRMATION_EMAIL_TOKEN,
    expiresIn: "1h",
  });
  const confirmationLink = `${req.protocol}://solarease.vercel.app/confirm/${token}`;
  const isEmailSent = await sendEmailServices({
    to: email,
    subject: "Email Confirmation",
    message: emailTemplate({
      link: confirmationLink,
      linkData:
        "Please click the button below to confirm your email and finish setting up your account. This link will expire in 1 hour.",
      subject: "Email Confirmation",
      buttonText: "Confirm",
    }),
  });
  if (!isEmailSent) {
    return next(new Error("Email not sent", { code: 500 }));
  }
  res
    .status(201)
    .json({ message: "Sign up done successfully!!", user, confirmationLink });
};
//MARK: confirm email
export const confirmEmail = async (req, res, next) => {
  const { token } = req.params;
  console.log(token);
  const decode = verifyToken({
    token,
    signature: process.env.CONFIRMATION_EMAIL_TOKEN,
  });
  const user = await accountModel.findOneAndUpdate(
    { email: decode.email, isConfirmed: false },
    { isConfirmed: true },
    { new: true }
  );

  if (!user)
    return next(new Error("Your Email is already confirmed", { cause: 400 }));
  else
    res
      .status(200)
      .json({ message: "Email confirmed successfully", user: user.profile });
};

// MARK: login
export const logIn = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await accountModel.findOne({
      email: email,
      isConfirmed: true,
    });
    if (!user) return next(new Error("Email not found", { cause: 436 }));
    if (!compareSync(password, user.password))
      return next(new Error("Password not correct", { cause: 436 }));
    console.log(user);
    const token = generateToken({
      payload: {
        email,
        _id: user._id,
        role: user.role,
      },
      signature: process.env.SIGN_IN_TOKEN_SECRET,
      expiresIn: "1h",
    });

    const updatedUser = await accountModel.findOneAndUpdate(
      { email },
      { token },
      { new: true }
    );
    await res.cookie("userToken", token, {
      maxAge: 1000 * 60 * 60 * 2,
      path: "/",
      sameSite: "strict",
    });
    const ret = {
      message: "User logged in",
      ...updatedUser.profile,
      role: user.role,
      email: updatedUser.email,
      token: updatedUser.token,
    };
    res.status(200).json({ message: "User logged in", ret });
};

// MARK: logout
export const logOut = async (req, res, next) => {
  console.log("logout");
  const user = req.user; 
  const updatedUser = await accountModel.findOneAndUpdate(
    { email: user.email },
    { token: "" },
    { new: true }
  );

  if (!updatedUser) return next(new Error("User not found", { cause: 404 }));
  res.clearCookie("userToken");
  res.status(200).json({ message: "User logged out" });
};
