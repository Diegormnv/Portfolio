import React from "react";
import projects from "../projects/projects";
import Project from "./Project";

const Projects = (props) => {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h1>Projects</h1>
        {projects.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
