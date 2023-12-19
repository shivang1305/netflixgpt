import React from "react";
import { AiFillPlayCircle, AiOutlineInfoCircle } from "react-icons/ai";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-tr from-black">
      <h1 className="text-2xl md:text-6xl font-bold w-1/3">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/3">{overview}</p>
      <div className="flex my-4 md:my-0">
        <button className="bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl md:text-2xl rounded-lg flex">
          <AiFillPlayCircle className="mr-1 mt-1" />
          Play
        </button>
        <button className="hidden md:flex mx-2 bg-gray-500 bg-opacity-50 text-white py-4 px-12 text-2xl rounded-lg">
          <AiOutlineInfoCircle className="mr-1 mt-1" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
