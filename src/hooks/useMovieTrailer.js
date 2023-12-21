import { API_OPTIONS } from "../utils/constants/constants";
import { useEffect } from "react";
import { getTrailer, getVideosAPI } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../redux/slices/moviesSlice";

const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideosList = async () => {
    const data = await fetch(getVideosAPI(movieID), API_OPTIONS);
    const jsonData = await data.json();

    const trailer = getTrailer(jsonData.results);

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieVideosList();
  }, []);
};

export default useMovieTrailer;
