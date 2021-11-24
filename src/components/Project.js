import React from "react";

const Project = ({ project }) => {
  console.log(project, "hello");
  return (
    <div className="project-container">
      <div className='title'>
        <h3>{project.title}</h3>
        <div className="projImg">
          <img src={project.image} alt="Project" />
        </div>
      </div>
      <div className="text">
        <p>{project.description}</p>
        <p>{project.languages}</p>
      </div>
        <a href={project.link}>Deployed Here</a>
    </div>
  );
};

export default Project;
