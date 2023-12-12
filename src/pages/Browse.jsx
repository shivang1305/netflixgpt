import React from "react";
import Header from "../components/header/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MovieContainer from "../components/movies/MovieContainer";
import MovieListContainer from "../components/movies/MovieListContainer";

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
