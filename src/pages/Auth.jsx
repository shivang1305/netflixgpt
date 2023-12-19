import React from "react";
import { HOME_BG_IMG } from "../utils/constants/constants";
import LoginForm from "../components/auth/LoginForm";
import Header from "../components/header/Header";
import { useLocation } from "react-router-dom";
import RegisterForm from "../components/auth/RegisterForm";

const Auth = () => {
  const urlLocation = useLocation();
  const path = urlLocation.pathname;

  return (
    <>
      <Header />
      <div className="fixed w-screen -z-10">
        <img
          src={HOME_BG_IMG}
          alt="netflix-bg-img"
          className="w-full h-screen object-cover"
        />
      </div>
      {path === "/login" || path === "/" ? <LoginForm /> : <RegisterForm />}
    </>
  );
};

export default Auth;
