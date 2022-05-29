import React from "react";

const RandomButton = ({ setIndex, flickr }) => {
  const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  return (
    <div className="px-5 mt-4 mb-5 d-flex justify-content-center  ">
      <button
        className="launch-random-button "
        onClick={() => setIndex(getRandomNumber(0, flickr.original.length - 1))}
      >
        Random picture
      </button>
    </div>
  );
};

export default RandomButton;
