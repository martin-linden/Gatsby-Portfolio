import React from 'react';
import '../sass/main.scss';

const Project = ({ title, text, github, website, image, alt, even }) => {
  let toggleCss = '';
  if (even % 2 === 0) {
    toggleCss = 'project-wrapper';
  } else {
    toggleCss = 'project-wrapper-reverse';
  }

  console.log(website);

  return (
    <div className={toggleCss}>
      <div className="project-content-wrapper">
        <div className="page-content">
          <h1 className="project-header">{title}</h1>
          <p className="project-text">{text}</p>
          <div className="link-container">
            {website ? (
              <a href={website} className="link2">
                Visit website
              </a>
            ) : null}
            <a href={github} className="link2">
              Github
            </a>
          </div>
        </div>
      </div>
      <div className="project-image-wrapper">
        <img className="project-image" alt={alt} src={image} />
      </div>
    </div>
  );
};

export default Project;
