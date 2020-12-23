import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Header from '../components/header';
import Welcome from '../images/Banners.svg';
import LottieAnimation from '../lotties/UncontrolledLottie';

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
        <BackgroundImage Tag="section" fluid={imageData} backgroundColor={`#040e18`} fadeIn>
          <div className="background-container">
            <Header />
            <div className="content-container">
              <div className="content">
                <LottieAnimation />
                <img id="Welcome" alt="Welcome" src={Welcome} />
              </div>
            </div>
            <div className="navigate">
              <a href="#projects">View Projects</a>
              <i className="arrow" />
            </div>
          </div>
        </BackgroundImage>
      );
    }}
  />
);

export default BackgroundSection;
