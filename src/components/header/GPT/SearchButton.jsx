import React from "react";
import { useDispatch } from "react-redux";
import { toggleGptSearchView } from "../../../utils/slices/gptSlice";

const SearchButton = () => {
  const dispatch = useDispatch();

  const handleSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <button
      onClick={handleSearchClick}
      className="bg-purple-600 text-white text-xl font-semibold rounded-lg mx-4 my-2 py-2 px-4 hover:bg-purple-800"
    >
      GPT Search
    </button>
  );
};

export default SearchButton;
