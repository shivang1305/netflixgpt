import { useDispatch } from "react-redux";
import { API_OPTIONS, UPCOMING_MOVIES_API } from "../utils/constants/constants";
import { addUpcomingMovies } from "../redux/slices/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(UPCOMING_MOVIES_API, API_OPTIONS);
    const jsonData = await data.json();

    dispatch(addUpcomingMovies(jsonData.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
