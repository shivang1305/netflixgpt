import React, { useState } from "react";
import { USER_LOGO_IMG } from "../../utils/constants/constants";
import { AiOutlineCaretDown } from "react-icons/ai";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UserMenu = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // user is signed out successfully
      })
      .catch(() => {
        navigate("/error");
      });
  };

  return (
    <div className="flex p-2 m-2">
      <button
        className="flex"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        // onBlur={() => setIsMenuOpen(false)}
      >
        <img
          className=" h-10 w-10 md:h-12 md:w-12 rounded-full"
          alt="user-img"
          src={user?.photoURL ? user?.photoURL : USER_LOGO_IMG}
        />
        <AiOutlineCaretDown className="h-8 m-2" />
      </button>
      {isMenuOpen && (
        <div className="absolute top-14 md:top-20 font-semibold text-lg md:text-xl bg-slate-200 rounded-lg">
          <button
            className="h-full p-1 m-1 md:p-2 md:m-2"
            onClick={handleSignout}
          >
            Signout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
