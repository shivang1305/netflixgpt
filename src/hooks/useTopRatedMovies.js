import { useDispatch } from "react-redux";
import {
  API_OPTIONS,
  TOP_RATED_MOVIES_API,
} from "../utils/constants/constants";
import { addTopRatedMovies } from "../redux/slices/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(TOP_RATED_MOVIES_API, API_OPTIONS);
    const jsonData = await data.json();

    dispatch(addTopRatedMovies(jsonData.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
