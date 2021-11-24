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
        <div>
          <p>Languages Used: {project.languages}</p>
          <a href={project.link}>
            <div className="button">Deployed Here</div> 
          </a>
        </div>
      </div>  
    </div>
  );
};

export default Project;
