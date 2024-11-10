import { useSearchParams } from "react-router-dom";
import { Signin } from "../components/Forms/Signin";
import { Signup } from "../components/Forms/Signup";
import { useEffect } from "react";
import authentication_forms from "../assets/authentication_forms.png";
export const Authentication = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get("mode")==="login";
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
        {isLogin ? <Signin/>: <Signup/>}
    </div>
  );
};