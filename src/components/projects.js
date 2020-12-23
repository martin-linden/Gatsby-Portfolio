import React from 'react';
import '../sass/main.scss';
import Project from './project';

const ProjectPage = ({ data }) => {
  return (
    <div className="project-border">
      <div className="project-header-wrapper" id="projects">
        <h1 className="page-header">Projects</h1>
        <hr className="line" />
      </div>
      {data.map((data, index) => {
        return (
          <Project
            key={index}
            title={data.project_title}
            text={data.project_text}
            github={data.github_link.url}
            website={data.website_link.url}
            image={data.project_image.fixed.src}
            alt={data.project_image.alt}
            even={index}
          />
        );
      })}
    </div>
  );
};

export default ProjectPage;
