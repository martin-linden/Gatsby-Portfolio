import React from 'react';
import Artboard from '../../Assets/images/flat-landscape-dark.svg';
import Arrow from '../../Assets/images/arrow.svg';

export default function Index() {
  return (
    <div className="contact-bg-container">
      <div
        className="bg-container"
        style={{
          backgroundImage: `url(${Artboard})`,
        }}
      >
        <h1>About Me</h1>
        <div className="text">
          <h2>
            I’m a creative front-end developer with extensive knowledge and great interest in
            developing responsive, well-functioning and good looking solutions for the web.
          </h2>
        </div>
      </div>
      <h5>Contact</h5>
      <img src={Arrow} alt="arrow down" />
    </div>
  );
}
