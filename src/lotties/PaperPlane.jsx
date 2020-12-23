// PaperPlane.jsx
import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from './json/mail.json';

class PaperPlane extends Component {
  render() {
    const defaultOptions = {
      loop: true,
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

export default PaperPlane;
