import { useSearchParams } from "react-router-dom";

export const CheckInbox = () => {
    const [searchParams] = useSearchParams();
    const mode = searchParams.get("mode");
    const message = mode==="check-inbox-confirmation" ? "confirm your email" : "reset your password";
    return (
        <div className="bg-white/80 p-8 rounded-3xl w-full max-w-md shadow-auth-form-shadow animate-slideRight mx-4 ">
            <div className="flex justify-center gap-4 items-center flex-col mb-5">
            <h1 className="text-3xl font-semibold  text-gray-800">Check Inbox</h1>
            <p>Check your inbox to {message}</p>
            </div>
        </div>
    );
  }