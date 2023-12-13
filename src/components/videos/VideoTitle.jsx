import React from "react";
import { AiFillPlayCircle, AiOutlineInfoCircle } from "react-icons/ai";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-tr from-black">
      <h1 className="text-6xl font-bold w-1/3">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black p-4 px-12 text-2xl rounded-lg flex">
          <AiFillPlayCircle className="mr-1 mt-1" />
          Play
        </button>
        <button className="mx-2 bg-gray-500 bg-opacity-50 text-white p-4 px-12 text-2xl rounded-lg flex">
          <AiOutlineInfoCircle className="mr-1 mt-1" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
