import React, { useState } from "react";
import { Eye, EyeOff,Mail, LockKeyhole } from "lucide-react";

import { useInput } from "../../hooks/useInput";
import {Form, Link} from "react-router-dom";

export const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    enteredValue: email,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));
  const {
    enteredValue: password,
    hasError: passwordHasError,
    isValid: passwordIsValid,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput((value) => value.trim().length > 6);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle sign in logic here
  //   console.log("Sign in attempted with:", { email });
  // };

  const handleGoogleLogin = () => {
    // Handle Google login logic here
    console.log("Google login attempted");
  };

  return (
    <div className="bg-white/80 p-8 rounded-3xl w-full max-w-md shadow-auth-form-shadow animate-slideDown mx-4 ">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold mb-6 text-gray-800">Sign in</h1>

        <div className="mb-6 text-gray-600">
          New to Green Energy?{" "}
          <Link to={"/authentication?mode=signup"} className="text-orange-500 hover:text-orange-600">
            Sign up for free
          </Link>
        </div>
      </div>
      <Form method="POST">
          <div>
            <label className={`${!emailHasError?"text-sm font-medium text-gray-700 mb-1 flex gap-1":"text-red-500 flex gap-1 mb-1 text-sm font-medium"}`} >
              <Mail className="font-thin text-sm"/> Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={emailChangeHandler}
              name="email"
              onBlur={emailBlurHandler}
              className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${!emailHasError?"":"border-red-500 bg-red-300 focus:bg-red-100 animate-shake"}`}
              required
            />
            <p className={`${!emailHasError?"invisible":"visible text-red-500 text-sm animate-slideDown text-center"}`}>Enter valid E-mail</p>
           </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label className={`gap-1 text-sm font-medium text-gray-700 flex ${passwordHasError?"text-red-500":""}`}>
               <LockKeyhole/> Password
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`text-gray-600 hover:text-gray-800 `}
              >
                {showPassword ? (
                  <Eye className="w-5 h-5" />
                ) : (
                  <EyeOff className="w-5 h-5" />
                )}
              </button>
            </div>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              name="password"
              className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${passwordHasError?"animate-shake border-red-500 bg-red-300 focus:bg-red-100":""}`}
              required
            />
            <p className={`${!passwordHasError?" invisible":"visible text-red-500 text-sm animate-slideDown text-center"}`}>Password must be at least 6 characters long</p>
          </div>

          <div className="text-right">
            <Link
              to={"/authentication?mode=forget-password"}
              className="text-orange-500 hover:text-orange-600 text-sm"
            >
              Forget password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={!emailIsValid || !passwordIsValid}
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-500"
          >
            Sign in
          </button>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 "
          >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4="
              alt="Google logo"
              className="w-5 h-5"
            />
            Login with Google
          </button>
      </Form>
    </div>
  );
};
