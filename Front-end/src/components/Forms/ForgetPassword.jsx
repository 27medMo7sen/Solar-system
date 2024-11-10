import { Mail } from "lucide-react";
import { useInput } from "../../hooks/useInput";
import {useNavigate} from "react-router-dom";
export const ForgetPassword = () => {
    const navigate = useNavigate();
    const {
        enteredValue: email,
        hasError: emailHasError,
        isValid: emailIsValid,
        valueChangeHandler: emailChangeHandler,
        valueBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput((value) => value.includes("@"));
    const submitHandler = (e) => {
        e.preventDefault();
        // Handle forget password logic here
        resetEmail();
        navigate("/authentication?mode=check-inbox");
    }
    return (
        <div className="bg-white/80 p-8 rounded-3xl w-full max-w-md shadow-auth-form-shadow animate-slideDown mx-4 ">
            <div className="flex justify-center items-center flex-col mb-5">
            <h1 className="text-3xl font-semibold  text-gray-800">Forget Password</h1>
            <p>Enter your email to receive password reset link</p>
            </div>
            <form onSubmit={submitHandler}>
                <div>
                <label className={`${!emailHasError?"text-sm font-medium text-gray-700 mb-1 flex gap-1":"text-red-500 flex gap-1 mb-1 text-sm font-medium"}`} >
                    <Mail className="font-thin text-sm"/> Email address
                </label>
                <input
                    type="email"
                    value={email}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${!emailHasError?"":"border-red-500 bg-red-300 focus:bg-red-100 animate-shake"}`}
                    required
                />
                <p className={`${!emailHasError?"invisible":"visible text-red-500 text-sm animate-slideDown text-center"}`}>Enter valid E-mail</p>
                 </div>
            <div className="flex justify-between items-center mb-1">
                <button
                type="submit"
                disabled={!emailIsValid}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-500"
                >
                Send Reset Link
                </button>
            </div>
            </form>
        </div>
        
    );
  };