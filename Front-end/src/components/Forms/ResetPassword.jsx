import { useInput } from "../../hooks/useInput";
import {LockKeyhole } from "lucide-react";
export const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState(false);

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
    } = useInput((value) => value.trim().length > 6);
    return (
        <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Reset Password
          </h1>
          <p className="text-gray-600 mb-6">
            Secure your account with new password
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
          <div>
              <div className="flex justify-between items-center mb-1">
                <label className={`flex gap-1 text-sm font-medium ${passwordHasError ? "text-red-500" : "text-gray-700"}`}>
                  <LockKeyhole/> Password
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
                onBlur={passwordBlurHandler}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  passwordHasError ? "border-red-500 bg-red-300 focus:bg-red-100 animate-shake text-center" : "border-gray-300"
                }`}
                required
              />
              <p className={`${!passwordHasError ? "invisible" : "visible text-red-500 text-sm animate-slideDown text-center"}`}>
                Password must be at least 6 characters long
              </p>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className={`flex gap-1 text-sm font-medium ${confirmPasswordHasError ? "text-red-500" : "text-gray-700"}`}>
                  <LockKeyhole/> Confirm password 
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
                onBlur={confirmPasswordBlurHandler}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  confirmPasswordHasError ? "border-red-500 bg-red-300 focus:bg-red-100 animate-shake text-center" : "border-gray-300"
                }`}
                required
              />
              <p className={`${!confirmPasswordHasError ? "invisible" : "visible text-red-500 text-sm animate-slideDown text-center"}`}>
                Passwords must be the same
              </p>
            </div>
    
            <button
              type="submit"
              disabled={!passwordIsValid || !confirmPasswordIsValid}
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-500"
            >
              Reset Password
            </button>
          </form>
        </div>
      );
};