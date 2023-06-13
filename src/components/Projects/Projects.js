import React from "react";
import "./projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "RITH Trading App",
      description: (
        <div className="description">
          <p>-A mock stock trading application</p>
          <p>-Interactive Charts</p>
          <p>-AI Powered Chatbot Assistant</p>
        </div>
      ),
      github:
        "https://github.com/CapstoneGroupThree/Robin-In-the-Hood-Trading-Corp-1",
      link: "https://rith-trading.onrender.com/",
      video: "https://youtu.be/CEUu0Cvp3uU",
    },
    {
      id: 2,
      name: "Grace Shopper",
      description: `An E-Commerce website`,
      github:
        "https://github.com/2301-fsa-et-web-ft-af-graceshopper-g1/grace_shopper",
      link: "https://graceshoppings-api.onrender.com/",
    },
    {
      id: 3,
      name: "3D Solar System Model",
      description: `A 3D model of the Solar System`,
      github: "https://github.com/charliea97/Solar-System-Model",
    },
  ];
  return (
    <div className="projects-container">
      <h1>PROJECTS</h1>
      <div className="projects-only">
        {projects.map(({ id, name, description, github, link, video }) => (
          <div key={id} className="single-project-container">
            <h2 className="project-name">{name}</h2>
            <p className="project-description">{description}</p>
            <p className="project-github">
              <a rel="noreferrer" href={github} target="_blank">
                Github Repository
              </a>
            </p>
            <p className="project-link">
              {link ? (
                <a rel="noreferrer" href={link} target="_blank">
                  Check out the deployed webiste!
                </a>
              ) : null}
            </p>
            <p className="project-video">
              {video ? (
                <a rel="noreferrer" href={video} target="_blank">
                  Watch the presentation
                </a>
              ) : null}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
