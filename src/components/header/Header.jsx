import { useEffect } from "react";
import { NETFLIX_LOGO } from "../../utils/constants";
import UserMenu from "./UserMenu";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { addUser, removeUser } from "../../utils/slices/userSlice";
import { useNavigate } from "react-router-dom";
import GPTSearchButton from "./GPTSearchButton";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // user is signed in
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));

        navigate("/browse");
      } else {
        dispatch(removeUser());

        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img src={NETFLIX_LOGO} alt="netflix-logo" className="w-48" />
      {user && (
        <div className="flex p-2">
          <GPTSearchButton />
          <UserMenu />
        </div>
      )}
    </div>
  );
};

export default Header;
