import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const LaunchpadsScreen = () => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [timezone, setTimezone] = useState("");
  const [status, setStatus] = useState("");

  const { id } = useParams();

  useEffect(() => {
    console.log("hello", id);
    axios.get(`https://api.spacexdata.com/v4/launchpads/${id}`).then((data) => {
      const launchpad = data.data;
      setName(launchpad.name);
      setDetails(launchpad.details);
      setTimezone(launchpad.timezone);
      setStatus(launchpad.status);
    });
  });

  return (
    <div>
      {name === "" ? (
        <h1>loading.....</h1>
      ) : (
        <div>
          <h3>Name: {name}</h3>
          <h5>Details: {details}</h5>
          <h3>Timezone: {timezone}</h3>
          <h3>Status: {status}</h3>
        </div>
      )}
    </div>
  );
};

export default LaunchpadsScreen;
