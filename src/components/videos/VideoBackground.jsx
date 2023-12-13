import React from "react";
import useMovieTrailer from "../../hooks/useMovieTrailer";
import { YOUTUBE_VIDEO_URL } from "../../utils/constants";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieID }) => {
  const trailer = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieID);

  return (
    <div className="w-screen aspect-video">
      <iframe
        className="w-screen aspect-video"
        src={YOUTUBE_VIDEO_URL + trailer?.key + "?autoplay=1&mute=1"}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
