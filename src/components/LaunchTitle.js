import React from "react";

const LaunchTitle = ({ name, index, flickr }) => {
  return (
    <div className="text-center mt-5 mb-5 px-3 ">
      <span className="launch-title">{name}</span>
      <br />
      <span className="launch-counter">
        {index}/{flickr.original.length - 1}
      </span>
    </div>
  );
};

export default LaunchTitle;
