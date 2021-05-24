import React from "react";

const Project = ({ project }) => {
  return (
    <div className="project-wrapper" href="" target="_blank">
      <p>{project.title}</p>
      <div>{project.image}</div>
      <p>{project.description}</p>
    </div>
  );
};

export default Project;
