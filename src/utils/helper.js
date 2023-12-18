import { API_OPTIONS } from "./constants/constants";

export const getTrailer = (results) => {
  const filteredVideos = results.filter((video) => video.type === "Trailer");

  const trailer = filteredVideos.length ? filteredVideos[0] : results[0];
  return trailer;
};

export const getRandomMovie = (movies) => {
  const length = movies.length;

  const randomMovie = movies[Math.floor(Math.random() * length)];

  return randomMovie;
};

export const getVideosAPI = (movieID) => {
  return `https://api.themoviedb.org/3/movie/${movieID}/videos`;
};

export const getYoutubeVideoURL = (vedioID) => {
  return `https://www.youtube.com/embed/${vedioID}?autoplay=1&mute=1&loop=1&playlist=${vedioID}`;
};

export const getSearchMovieAPI = (movieName) => {
  return `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`;
};

export const getSearchedMovie = async (movieName) => {
  const data = await fetch(getSearchMovieAPI(movieName), API_OPTIONS);
  const jsonData = await data.json();

  return jsonData;
};
