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
