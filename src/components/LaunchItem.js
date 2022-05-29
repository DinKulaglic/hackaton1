import React from "react";

import KeyboardDoubleArrowRightRounded from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import KeyboardDoubleArrowLeftRounded from "@mui/icons-material/KeyboardDoubleArrowLeftRounded";

const LaunchItem = ({ index, flickr, setIndex, name }) => {
  return (
    <div className="row px-5 mt-5 align-items-center">
      <div className="col-2 col-md-3 d-flex justify-content-center">
        <button
          className="launch-toggle-button align-middle"
          onClick={() => {
            if (index > 0) {
              setIndex(index - 1);
            } else if (index === 0) {
              setIndex(flickr?.original.length - 1);
            }
          }}
        >
          <KeyboardDoubleArrowLeftRounded />
        </button>
      </div>
      <div className="col-8 col-md-6 d-flex justify-content-center">
        {flickr?.original.length > 0 ? (
          <img
            className="img-fluid launch-picture"
            src={flickr?.original[index]}
            alt={name}
          />
        ) : (
          "No picture available"
        )}
      </div>
      <div className="col-2 col-md-3 d-flex justify-content-center">
        <button
          className="launch-toggle-button"
          onClick={() => {
            if (index < flickr?.original.length - 1) {
              setIndex(index + 1);
            } else if (index === flickr?.original.length - 1) {
              setIndex(0);
            }
          }}
        >
          <KeyboardDoubleArrowRightRounded />
        </button>
      </div>
    </div>
  );
};

export default LaunchItem;
