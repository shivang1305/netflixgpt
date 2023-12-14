import React from "react";
import Header from "../components/header/Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainMovieContainer from "../components/movies/MainMovieContainer";
import AllMovieContainer from "../components/movies/AllMovieContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GPTSearchComp from "../components/header/GPTSearchComp";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GPTSearchComp />
      ) : (
        <>
          <MainMovieContainer />
          <AllMovieContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
