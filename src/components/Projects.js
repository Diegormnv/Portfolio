import React from "react";
import projects from "../projects/projects";
import Project from "./Project";

const Projects = () => {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
