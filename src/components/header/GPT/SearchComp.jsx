import React from "react";
import SearchBar from "./SearchBar";
import MovieSuggestions from "./MovieSuggestions";
import { HOME_BG_IMG } from "../../../utils/constants";

const SearchComp = () => {
  return (
    <div>
      <div className="absolute w-full -z-10">
        <img src={HOME_BG_IMG} alt="netflix-bg-img" className="w-full" />
      </div>
      <SearchBar />
      <MovieSuggestions />
    </div>
  );
};

export default SearchComp;
