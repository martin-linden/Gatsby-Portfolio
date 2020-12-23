// UncontrolledLottie.jsx
import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from './json/welcome.json';

class UncontrolledLottie extends Component {
  render() {
    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <div>
        <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
      </div>
    );
  }
}

export default UncontrolledLottie;
