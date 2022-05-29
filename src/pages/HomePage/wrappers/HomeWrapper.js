import React, { useState, useEffect } from "react";
import Launch from "../../../components/Launch";
import Title from "../../../components/Title";

const HomeWrapper = () => {
  const [launches, setLaunches] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    fetch("https://api.spacexdata.com/v5/launches")
      .then((res) => res.json())
      .then((launch) => {
        setLaunches(launch[14]);
        setLoaded(true);
        setError("");
      })
      .catch((err) => setError(err));
  }, []);

  return (
    <div className="container-fluid">
      <Title />
      {!error && isLoaded ? (
        <Launch {...launches} />
      ) : (
        <span className="error-text text-center">{error}</span>
      )}
    </div>
  );
};

export default HomeWrapper;
