import React, { useState } from "react";

import LaunchTitle from "./LaunchTitle";
import LaunchItem from "./LaunchItem";
import RandomButton from "./RandomButton";

const Launch = ({ name, links }) => {
  const { flickr } = links;
  const [index, setIndex] = useState(0);

  return (
    <section className="launch-section  ">
      <LaunchTitle name={name} index={index} flickr={flickr} />
      <LaunchItem
        name={name}
        index={index}
        flickr={flickr}
        setIndex={setIndex}
      />
      <RandomButton flickr={flickr} setIndex={setIndex} />
    </section>
  );
};

export default Launch;
