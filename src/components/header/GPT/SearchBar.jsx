import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lang } from "../../../utils/constants/languageConstants";
import openai from "../../../utils/openai";
import { getSearchedMovie } from "../../../utils/helper";
import { addGptMovies } from "../../../redux/slices/gptSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.language);
  const searchText = useRef(null);

  const moviesArr = [
    "Hera Pheri",
    "Golmaal",
    "Bhagam Bhaag",
    "Garam Masala",
    "Bhool Bhulaiya",
  ];

  const handleGptSearch = async () => {
    // const gptQuery = `Act as a movie recommendation system and suugest some movies for the given query: ${searchText.current.value}. Only give 5 movies comma seperated like the example given ahead. Example: Movie 1, Movie 2, Movie 3, Movie 4, Movie 5`;

    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", context: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    const promiseArr = moviesArr.map((movieName) =>
      getSearchedMovie(movieName)
    );

    // Promise.all() will wait for all promises to resolve and get the data
    const moviesResults = await Promise.all(promiseArr);

    dispatch(
      addGptMovies({ movieNames: moviesArr, moviesResults: moviesResults })
    );
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        className="md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-lg md:text-xl text-white rounded-lg"
          onClick={handleGptSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
