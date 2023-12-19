import React from "react";
import MovieListContainer from "./MovieListContainer";
import { useSelector } from "react-redux";

const AllMovieContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies && (
      <div className="bg-black">
        <div className="md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieListContainer
            category={"Now Playing"}
            movies={movies?.nowPlaying}
          />
          <MovieListContainer category={"Popular"} movies={movies?.popular} />
          <MovieListContainer
            category={"Top Rated"}
            movies={movies?.topRated}
          />
          <MovieListContainer category={"Upcoming"} movies={movies?.upcoming} />
          <MovieListContainer category={"Horror"} movies={movies?.nowPlaying} />
        </div>
      </div>
    )
  );
};

export default AllMovieContainer;
