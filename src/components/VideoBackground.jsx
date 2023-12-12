import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { YOUTUBE_VIDEO_URL } from "../utils/constants";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieID }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieID);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={YOUTUBE_VIDEO_URL + trailer?.key}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
