import { useEffect } from "react";
import { NETFLIX_LOGO } from "../../utils/constants/constants";
import UserMenu from "./UserMenu";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { addUser, removeUser } from "../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import SearchButton from "./GPT/SearchButton";
import LanguageSelection from "./LanguageSelection";

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
        src={NETFLIX_LOGO}
        alt="netflix-logo"
        className="w-48 mx-auto md:mx-0"
      />
      {user && (
        <div className="flex px-2 justify-between">
          {showGptSearch && <LanguageSelection />}
          <SearchButton />
          <UserMenu />
        </div>
      )}
    </div>
  );
};

export default Header;
