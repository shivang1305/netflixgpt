import React from "react";
import SearchBar from "./SearchBar";
import MovieSuggestions from "./MovieSuggestions";
import { HOME_BG_IMG } from "../../../utils/constants/constants";

const SearchComp = () => {
  return (
    <>
      <div className="fixed w-screen -z-10">
        <img
          src={HOME_BG_IMG}
          alt="netflix-bg-img"
          className="w-full h-screen object-cover"
        />
      </div>
      <div>
        <SearchBar />
        <MovieSuggestions />
      </div>
    </>
  );
};

export default SearchComp;
