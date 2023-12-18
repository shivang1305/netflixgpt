import React from "react";
import MovieListContainer from "../../movies/MovieListContainer";
import { useSelector } from "react-redux";

const MovieSuggestions = () => {
  const { movieNames, gptMovies } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80">
      {movieNames.map((movie, index) => (
        <MovieListContainer
          key={movie}
          category={movie}
          movies={gptMovies[index]?.results}
        />
      ))}
    </div>
  );
};

export default MovieSuggestions;
