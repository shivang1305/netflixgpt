import React from "react";
import { HOME_BG_IMG } from "../utils/constants";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/slices/userSlice";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // user is signed in
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));

        // navigate the signed in user to browse page
        navigate("/browse");
      }
      // user is signed out
      else {
        dispatch(removeUser());

        navigate("/login");
      }
    });
  }, []);

  return (
    <div className="absolute w-full">
      <img src={HOME_BG_IMG} alt="netflix-bg-img" className="w-full" />
    </div>
  );
};

export default Body;
