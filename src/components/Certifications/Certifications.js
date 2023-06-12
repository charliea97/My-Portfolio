import React from "react";
import FSA from "../../photos/Fullstack Cert PNG.png";
import FCC from "../../photos/FCC Cert PNG.png";
import "./certifications.css";

const Certifications = () => {
  return (
    <div className="certification-container">
      <h1>Certifications</h1>
      <div className="image-container">
        <img alt="FSA Certification" src={FSA} />
        <img alt="FCC Certification" src={FCC} />
      </div>
    </div>
  );
};

export default Certifications;
