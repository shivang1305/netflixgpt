import React from "react";
import VideoBackground from "../videos/VideoBackground";
import VideoTitle from "../videos/VideoTitle";
import { useSelector } from "react-redux";
import { getRandomMovie } from "../../utils/helper";

const MainMovieContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlaying);

  if (!movies) return;

  const mainMovie = getRandomMovie(movies);

  const { title, overview, id } = mainMovie;

  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieID={id} />
    </div>
  );
};

export default MainMovieContainer;
