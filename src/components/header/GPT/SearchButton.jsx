import React from "react";
import { useDispatch } from "react-redux";
import { toggleGptSearchView } from "../../../redux/slices/gptSlice";

const SearchButton = () => {
  const dispatch = useDispatch();

  const handleSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <button
      onClick={handleSearchClick}
      className="bg-purple-600 text-white text-xl font-semibold rounded-lg p-4 m-4 hover:bg-purple-800"
    >
      GPT Search
    </button>
  );
};

export default SearchButton;
