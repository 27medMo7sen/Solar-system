import { useSearchParams } from "react-router-dom";
import { Signin } from "../components/Forms/Signin";
import { Signup } from "../components/Forms/Signup";
import { ForgetPassword } from "../components/Forms/ForgetPassword";
import { useEffect } from "react";
import authentication_forms from "../assets/authentication_forms.png";
import { CheckInbox } from "../components/Forms/CheckInbox";
import { uiActions } from "../store/ui-slice";
import { useDispatch } from "react-redux";
import axios from "axios";
import cookies from "js-cookie";
export const Authentication = () => {
  const dispatch = useDispatch();
  dispatch(uiActions.clearPath());
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  return (
    <div
      style={{
        backgroundImage: `url(${authentication_forms})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {mode === "signin" ? (
        <Signin />
      ) : mode === "signup" ? (
        <Signup />
      ) : mode === "check-inbox-confirmation" ||
        mode === "check-inbox-reset" ? (
        <CheckInbox />
      ) : (
        <ForgetPassword />
      )}
    </div>
  );
};
export const action = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode");
  const data = await request.formData();

  let bodyObj;
  if (mode === "signup") {
    bodyObj = {
      email: data.get("email"),
      password: data.get("password"),
      first_name: data.get("firstName"),
      last_name: data.get("lastName"),
      phone_number: data.get("phone"),
      confirm_password: data.get("confirmPassword"),
    };
  }
  if (mode === "signin") {
    bodyObj = {
      email: data.get("email"),
      password: data.get("password"),
    };
  }
  if (mode === "forget-password") {
    bodyObj = {
      email: data.get("email"),
    };
  }

  try {
    const res = await axios.post(
      `/auth/${
        mode === "signup"
          ? "sign-up"
          : mode === "signin"
          ? "log-in"
          : "forget-password"
      }`,
      bodyObj,
      {
        headers: {
          "Content-Type": "application/json",
          credentials: "include",
        },
      }
    );
    console.log(res.data);
    return {
      message: res.data.message,
      status: res.status,
      ret: res.data.ret || null,
    };
  } catch (error) {
    const res = error.response || {};
    return {
      message: res.data?.message || "Something went wrong!",
      status: res.status || 500,
    };
  }
};
