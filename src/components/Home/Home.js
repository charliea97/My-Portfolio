import React from "react";
import "./home.css";
import Github from "../Github/Github";

const Home = () => {
  return (
    <div className="Home">
      <header className="home-header">
        <h1>Charlie Aloisio</h1>
      </header>
      <div className="github-container">
        <Github />
      </div>
    </div>
  );
};

export default Home;
