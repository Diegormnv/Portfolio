import React from "react";

const Project = ({ project }) => {
  console.log(project, "hello");
  return (
    <div className="project-container">
      <h3>{project.title}</h3>
      <div className="projImg">
        <img src={project.image} alt="Nasa Project" />
      </div>
      <a href={project.link}>Deployed Here</a>
      <p>{project.description}</p>
      <p>{project.languages}</p>
    </div>
  );
};

export default Project;
