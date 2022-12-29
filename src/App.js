import React from "react";
import HomeScreen from "./component/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LaunchpadsScreen from "./component/LaunchpadsScreen";
import Header from "./component/Header";
import "./style.css";
const App = () => {
  return (
    <div>
      <Header />

      <Router>
        <Routes>
          <Route path="/launchpad/:id" element={<LaunchpadsScreen />} />
          <Route path="/" exact element={<HomeScreen />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
