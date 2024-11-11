import { useSearchParams } from "react-router-dom";
import { Signin } from "../components/Forms/Signin";
import { Signup } from "../components/Forms/Signup";
import { ForgetPassword } from "../components/Forms/ForgetPassword";
import { useEffect } from "react";
import authentication_forms from "../assets/authentication_forms.png";
import { CheckInbox } from "../components/Forms/CheckInbox";
import { uiActions } from "../store/ui-slice";
import { useDispatch } from "react-redux";
export const Authentication = () => {
  const dispatch = useDispatch();
  dispatch(uiActions.clearPath());
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
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
        {mode==="login" ? <Signin/>: mode==="signup" ? <Signup/>: mode==="check-inbox"?<CheckInbox/>:<ForgetPassword/>}
    </div>
  );
};