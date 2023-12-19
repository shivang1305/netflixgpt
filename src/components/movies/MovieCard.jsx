import React from "react";
import { IMG_CDN_URL } from "../../utils/constants/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-36 md:w-52 pr-5">
      <img alt="Poster-img" className="h-full" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
