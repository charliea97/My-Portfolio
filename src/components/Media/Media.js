import React from "react";
import "./media.css";

const Media = () => {
  const videoId = `6NbzW89hC4s`;
  const getAutoplayUrl = () => {
    //Generate a random number to fill in the video id
    const randomParam = Math.floor(Math.random() * 100000);
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&random=${randomParam}`;
  };
  return (
    <div>
      <div>
        <iframe
          className="iFrame"
          src={getAutoplayUrl()}
          title="YouTube video player"
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  );
};

export default Media;
