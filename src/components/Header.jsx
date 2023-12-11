import { NETFLIX_LOGO } from "../utils/constants";
import UserMenu from "./UserMenu";

const Header = ({ loggedInUser }) => {
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img src={NETFLIX_LOGO} alt="netflix-logo" className="w-48" />
      {loggedInUser && <UserMenu />}
    </div>
  );
};

export default Header;
