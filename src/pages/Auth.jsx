import React from "react";
import { HOME_BG_IMG } from "../utils/constants";
import LoginForm from "../components/LoginForm";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";

const Auth = () => {
  const urlLocation = useLocation();
  const path = urlLocation.pathname;

  return (
    <>
      <Header />
      <div className="absolute w-full">
        <img src={HOME_BG_IMG} alt="netflix-bg-img" className="w-full" />
      </div>
      {path === "/login" || path === "/" ? <LoginForm /> : <RegisterForm />}
    </>
  );
};

export default Auth;
