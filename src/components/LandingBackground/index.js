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
        <h1>Welcome</h1>
        <div className="text">
          <h2>I'm Martin Lindén</h2>
          <h3>Front-End Developer</h3>
        </div>
      </div>
      <a href="#section2">Dev Projects</a>
      <img src={Arrow} alt="arrow down" />
    </div>
  );
}
