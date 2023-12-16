import React from "react";
import { IMG_CDN_URL } from "../../utils/constants/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-52 pr-5">
      <img alt="Poster-img" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
