import React from "react";
import MovieCard from "./MovieCard";

const MovieListContainer = ({ category, movies }) => {
  if (movies?.length === 0) return null;
  return (
    <div className="p-5">
      <h1 className="font-semibold text-xl md:text-3xl py-4 text-white">
        {category}
      </h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieListContainer;
