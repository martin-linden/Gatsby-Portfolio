import React from 'react';
import Artboard from '../../Assets/images/flat-landscape-dark.svg';
import Arrow from '../../Assets/images/arrow.svg';

export default function Index() {
  return (
    <div className="main-container">
      <div
        className="bg-container"
        style={{
          backgroundImage: `url(${Artboard})`,
        }}
      >
        <h1>Hello</h1>
        <div className="text">
          <h2>I'm Martin</h2>
          <h2>Front-End Developer</h2>
        </div>
      </div>
      <h5>Dev Projects</h5>
      <img src={Arrow} alt="arrow down" />
    </div>
  );
}
