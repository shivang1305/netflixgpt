import { API_OPTIONS, GET_VIDEOS_API } from "../utils/constants/constants";

import { useEffect } from "react";
import { getTrailer } from "../utils/helper";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../redux/slices/moviesSlice";

const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();

  const getMovieVideosList = async () => {
    const data = await fetch(GET_VIDEOS_API(movieID), API_OPTIONS);
    const jsonData = await data.json();

    const trailer = getTrailer(jsonData.results);

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideosList();
  }, []);
};

export default useMovieTrailer;
