import React from "react";
import useMovieTrailer from "../../hooks/useMovieTrailer";
import { useSelector } from "react-redux";
import { getYoutubeVideoURL } from "../../utils/helper";

const VideoBackground = ({ movieID }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieID);

  return (
    <div className="w-screen aspect-video">
      <iframe
        className="w-screen aspect-video"
        src={getYoutubeVideoURL(trailer?.key)}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
