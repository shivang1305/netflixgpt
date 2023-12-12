import React from "react";
import Header from "../components/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MovieContainer from "../components/MovieContainer";
import MovieListContainer from "../components/MovieListContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MovieContainer />
      <MovieListContainer />
    </div>
  );
};

export default Browse;
