import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MovieContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[1];
  console.log(mainMovie);

  const { title, overview, id } = mainMovie;

  return (
    <div>
      <VideoBackground movieID={id} />
      <VideoTitle title={title} overview={overview} />
    </div>
  );
};

export default MovieContainer;
