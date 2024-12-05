import Confetti from "react-confetti";
import authentication_forms from "../../assets/authentication_forms.png";
import { Fragment } from "react";
import { Link } from "react-router-dom";
export const Celebration = (props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${authentication_forms})`,
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      {props.message ===
        "Congratulations! You have successfully created an account." && (
        <Confetti
          drawShape={(ctx) => {
            ctx.beginPath();
            for (let i = 0; i < 22; i++) {
              const angle = 0.35 * i;
              const x = (0.2 + 1.5 * angle) * Math.cos(angle);
              const y = (0.2 + 1.5 * angle) * Math.sin(angle);
              ctx.lineTo(x, y);
            }
            ctx.stroke();
            ctx.closePath();
          }}
        />
      )}
      <div className=" flex  flex-col justify-center items-center h-screen p-8 rounded-3xl w-full max-w-full ">
        <div className=" p-8 bg-white/80 rounded-3xl w-full max-w-md shadow-auth-form-shadow animate-slideDown mx-4 ">
          <h1 className="text-3xl font-semibold flex justify-center mb-3  text-gray-800">
            Welcome to solarEase
          </h1>
          <div className="flex font-semibold  justify-center gap-4 items-center flex-col mb-5">
            <p>{props.message}</p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Link
              to="/authentication?mode=signin"
              className="text-center bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
            >
              Sign in
            </Link>
            <Link
              to="/"
              className="text-center bg-Secondary-button hover:bg-Secondary-button-hover text-white px-4 py-2 rounded-md"
            >
              Go to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
