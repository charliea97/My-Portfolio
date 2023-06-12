import React from "react";
import "./projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "RITH Trading App",
      github:
        "https://github.com/CapstoneGroupThree/Robin-In-the-Hood-Trading-Corp-1",
      link: "https://rith-trading.onrender.com/",
      video: "https://youtu.be/CEUu0Cvp3uU",
    },
    {
      id: 2,
      name: "Grace Shopper",
      github:
        "https://github.com/2301-fsa-et-web-ft-af-graceshopper-g1/grace_shopper",
      link: "https://graceshoppings-api.onrender.com/",
    },
    {
      id: 3,
      name: "3D Solar System Model",
      github: "https://github.com/charliea97/Solar-System-Model",
    },
  ];
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      {projects.map(({ id, name, github, link, video }) => (
        <div key={id} className="single-project-container">
          <h2 className="project-name">{name}</h2>
          <p className="project-github">
            <a rel="noreferrer" href={github} target="_blank">
              Github
            </a>
          </p>
          <p className="project-link">
            {link ? (
              <a rel="noreferrer" href={link} target="_blank">
                Checkout the deployed webiste
              </a>
            ) : (
              " "
            )}
          </p>
          <p className="project-video">
            {video ? (
              <a rel="noreferrer" href={video} target="_blank">
                Watch our presentation of this project!
              </a>
            ) : (
              ""
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
