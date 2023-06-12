import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>
        <a
          rel="noreferrer"
          href="https://en.wikipedia.org/wiki/Calogero"
          target="_blank"
        >
          Charlie
        </a>
        Aloisio
      </h1>
      <h2>Fullstack Software Engineer</h2>
      <p>{`PERN Stack | Javascript | React | CSS`}</p>
    </div>
  );
};

export default Header;
