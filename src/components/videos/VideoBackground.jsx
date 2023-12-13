import React from "react";
import useMovieTrailer from "../../hooks/useMovieTrailer";
import {
  GET_YOUTUBE_VIDEO_URL,
  YOUTUBE_VIDEO_URL,
} from "../../utils/constants";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieID }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieID);

  return (
    <div className="w-screen aspect-video">
      <iframe
        className="w-screen aspect-video"
        src={GET_YOUTUBE_VIDEO_URL(trailer?.key)}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
