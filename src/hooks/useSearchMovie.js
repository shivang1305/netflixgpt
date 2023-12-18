import { API_OPTIONS } from "../utils/constants/constants";
import { useEffect, useState } from "react";
import { getSearchMovieAPI } from "../utils/helper";

const useSearchMovie = (movieName) => {
  const [movie, setMovie] = useState(null);

  const getSearchedMovie = async () => {
    const data = await fetch(getSearchMovieAPI(movieName), API_OPTIONS);
    const jsonData = await data.json();

    setMovie(jsonData);
  };

  useEffect(() => {
    getSearchedMovie();
  }, []);

  return movie;
};

export default useSearchMovie;
