import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearchView } from "../../../redux/slices/gptSlice";

const SearchButton = () => {
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <button
      onClick={handleSearchClick}
      className="bg-purple-600 text-white text-lg md:text-xl md:font-semibold rounded-lg p-1 m-1 h-full md:p-2 hover:bg-purple-800"
    >
      {showGptSearch ? "Homepage" : "GPT Search"}
    </button>
  );
};

export default SearchButton;
