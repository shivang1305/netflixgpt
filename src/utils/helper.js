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
