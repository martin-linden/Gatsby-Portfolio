import React from 'react';
import Project from '../Project/index';

const ProjectPage = ({ data }) => {
  return (
    <div className="project-border" id="section2">
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
