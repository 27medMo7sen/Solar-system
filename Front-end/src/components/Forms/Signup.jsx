import { useInput } from "../../hooks/useInput";
import {
  Mail,
  LockKeyhole,
  EyeOff,
  Eye,
  IdCard,
  Phone,
  Loader,
} from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { useEffect, useState } from "react";
import {
  Form,
  Link,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  useEffect(() => {
    if (data) {
      console.log(data);
      if (data.status === 201) {
        console.log(11111);
        navigate("/authentication?mode=check-inbox-confirmation");
      }
    }
  }, [data]);
  const {
    enteredValue: firstName,
    hasError: firstNameHasError,
    isValid: firstNameIsValid,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput((value) => value.trim().length >= 2);

  const {
    enteredValue: lastName,
    hasError: lastNameHasError,
    isValid: lastNameIsValid,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput((value) => value.trim().length >= 2);

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
  const {
    enteredValue: confirmPassword,
    hasError: confirmPasswordHasError,
    isValid: confirmPasswordIsValid,
    valueChangeHandler: confirmPasswordChangeHandler,
    valueBlurHandler: confirmPasswordBlurHandler,
    reset: resetConfirmPassword,
  } = useInput((value) => value.trim() === password);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!emailIsValid || !passwordIsValid || !firstNameIsValid || !lastNameIsValid || !usernameIsValid) {
  //     return;
  //   }
  //   console.log('Sign up attempted with:', { firstName, lastName, username, email, password });
  //   resetFirstName();
  //   resetLastName();
  //   resetUsername();
  //   resetEmail();
  //   resetPassword();
  //   resetConfirmPassword();
  // };
  const [phone, setPhone] = useState("");
  const handlePhoneChange = (value) => {
    setPhone(value);
  };
  const handleGoogleSignUp = () => {
    console.log("Google sign up attempted");
  };

  return (
    <div className="bg-white/80 p-8 rounded-3xl  w-full max-w-md animate-slideDown m-4 shadow-auth-form-shadow">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800 text-center">
        Sign Up
      </h1>

      <Form method="POST">
        <div>
          <label
            className={`flex gap-1 text-sm font-medium ${
              firstNameHasError ? "text-red-500" : "text-gray-700"
            } mb-1`}
          >
            <IdCard />
            First name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={firstName}
            name="firstName"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
              firstNameHasError
                ? "border-red-500 bg-red-300 focus:bg-red-100 animate-shake"
                : "border-gray-300"
            }`}
            required
          />
          <p
            className={`${
              !firstNameHasError
                ? "invisible"
                : "visible text-red-500 text-sm animate-slideDown text-center"
            }`}
          >
            First name must be at least 2 characters long
          </p>
        </div>

        <div>
          <label
            className={`flex gap-1 text-sm font-medium ${
              lastNameHasError ? "text-red-500" : "text-gray-700"
            } mb-1`}
          >
            <IdCard />
            Last name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={lastName}
            name="lastName"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
              lastNameHasError
                ? "border-red-500 bg-red-300 focus:bg-red-100 animate-shake"
                : "border-gray-300"
            }`}
            required
          />
          <p
            className={`${
              !lastNameHasError
                ? "invisible"
                : "visible text-red-500 text-sm animate-slideDown text-center"
            }`}
          >
            Last name must be at least 2 characters long
          </p>
        </div>
        <div className="mb-6">
          <label className="flex gap-1 text-sm font-medium text-gray-700 mb-1">
            <Phone />
            Phone number
          </label>
          <PhoneInput
            country={"eg"}
            value={phone}
            inputProps={{
              name: "phone",
            }}
            containerStyle={{
              width: "100%",
            }}
            inputStyle={{
              width: "100%",
              padding: "0.5rem 0.75rem",
              border: "1px solid #d2d6dc",
              borderRadius: "0.5rem",
              paddingLeft: "2.5rem",
              outline: "none",
              backgroundColor: "white",
              transition: "border-color 0.2s, box-shadow 0.2s",
            }}
            buttonStyle={{
              borderRight: "1px solid #d2d6dc",
              backgroundColor: "#f7fafc",
              hover: {
                backgroundColor: "#edf2f7",
              },
            }}
            dropdownStyle={{
              backgroundColor: "white",
              border: "1px solid #d2d6dc",
              boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>

        <div>
          <label
            className={`flex gap-1 text-sm font-medium ${
              emailHasError ? "text-red-500" : "text-gray-700"
            } mb-1`}
          >
            <Mail className="font-thin text-sm" /> Email address{" "}
            <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={email}
            name="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
              emailHasError
                ? "border-red-500 bg-red-300 focus:bg-red-100 animate-shake"
                : "border-gray-300"
            }`}
            required
          />
          <p
            className={`${
              !emailHasError
                ? "invisible"
                : "visible text-red-500 text-sm animate-slideDown text-center"
            }`}
          >
            Enter valid E-mail
          </p>
        </div>

        <div>
          <div className="flex justify-between items-center mb-1">
            <label
              className={`flex gap-1 text-sm font-medium ${
                passwordHasError ? "text-red-500" : "text-gray-700"
              }`}
            >
              <LockKeyhole /> Password <span className="text-red-500">*</span>
            </label>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-600 hover:text-gray-800"
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
            name="password"
            onBlur={passwordBlurHandler}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
              passwordHasError
                ? "border-red-500 bg-red-300 focus:bg-red-100 animate-shake text-center"
                : "border-gray-300"
            }`}
            required
          />
          <p
            className={`${
              !passwordHasError
                ? "invisible"
                : "visible text-red-500 text-sm animate-slideDown text-center"
            }`}
          >
            Password must be at least 6 characters long
          </p>
        </div>
        <div>
          <div className="flex justify-between items-center mb-1">
            <label
              className={`flex gap-1 text-sm font-medium ${
                confirmPasswordHasError ? "text-red-500" : "text-gray-700"
              }`}
            >
              <LockKeyhole /> Confirm password{" "}
              <span className="text-red-500">*</span>
            </label>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-600 hover:text-gray-800"
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
            value={confirmPassword}
            onChange={confirmPasswordChangeHandler}
            name="confirmPassword"
            onBlur={confirmPasswordBlurHandler}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
              confirmPasswordHasError
                ? "border-red-500 bg-red-300 focus:bg-red-100 animate-shake text-center"
                : "border-gray-300"
            }`}
            required
          />
          <p
            className={`${
              !confirmPasswordHasError
                ? "invisible"
                : "visible text-red-500 text-sm animate-slideDown text-center"
            }`}
          >
            Passwords must be the same
          </p>
        </div>

        <div className="text-center text-sm text-gray-600">
          Already have account?{" "}
          <Link
            to="/authentication?mode=login"
            className="text-orange-500 hover:text-orange-600"
          >
            Login here
          </Link>
        </div>

        <button
          type="submit"
          disabled={
            !emailIsValid ||
            !passwordIsValid ||
            !firstNameIsValid ||
            !lastNameIsValid ||
            !confirmPasswordIsValid ||
            isSubmitting
          }
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-500"
        >
          { !isSubmitting?"Sign up":<Loader className="text-center w-full" />}
        </button>

        <button
          type="button"
          onClick={handleGoogleSignUp}
          disabled={isSubmitting}
          className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
        >
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4="
            alt="Google logo"
            className="w-5 h-5"
          />
          Sign Up with Google
        </button>
      </Form>
    </div>
  );
};
