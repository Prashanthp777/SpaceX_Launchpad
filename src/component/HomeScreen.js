import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Header from "./Header";

const HomeScreen = () => {
  const [launchpads, setLaunchpads] = useState([]);

  useEffect(() => {
    axios.get("https://api.spacexdata.com/v4/launchpads").then((data) => {
      const launchpads = data.data;
      setLaunchpads(launchpads);
    });
  }, []);

  const navigate = useNavigate();

  const launchClicked = (id) => {
    navigate(`/launchpad/${id}`);
  };

  return (
    <div>
      {/* <Header /> */}
      {launchpads.length === 0 ? (
        <h1>loading...</h1>
      ) : (
        <div>
          {launchpads.map((launchpad) => {
            return (
              <div
                id={launchpad.id}
                onClick={() => launchClicked(launchpad.id)}
              >
                <h3>Id: {launchpad.id}</h3>
                <h3>name: {launchpad.name}</h3>
                <h3>status: {launchpad.status}</h3>
                <h5>
                  <h3>details:-</h3>
                  {launchpad.details}
                </h5>

                {launchpad.launches.length === 0 ? (
                  <h2>No launchpad</h2>
                ) : (
                  <div>
                    {launchpad.launches.slice(0, 3).map((lunch, i) => {
                      return (
                        <div id={i}>
                          <h3>Launches: {lunch}</h3>
                        </div>
                      );
                    })}
                  </div>
                )}
                <hr />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default HomeScreen;
