import { useDispatch } from "react-redux";
import { API_OPTIONS, POPULAR_MOVIES_API } from "../utils/constants/constants";
import { addPopularMovies } from "../redux/slices/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_MOVIES_API, API_OPTIONS);
    const jsonData = await data.json();

    dispatch(addPopularMovies(jsonData.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
