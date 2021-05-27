import React from "react";

const Project = ({ project }) => {
  return (
    <div className="project-container">
      <p>{project.title}</p>
      {/*<div>{project.image}</div>*/}
      <a href={project.link}>Deployed Here</a>
      <p>{project.description}</p>
      <p>{project.languages}</p>
    </div>
  );
};

export default Project;
