import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Artboard from '../../Assets/images/flat-landscape-dark.svg';
import Arrow from '../../Assets/images/arrow.svg';

const BackgroundSection = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "Artboard1.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data) => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid;
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
          <h5>Projects</h5>
          <img src={Arrow} alt="arrow down" />
        </div>
      );
    }}
  />
);

export default BackgroundSection;
