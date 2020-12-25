import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
const BackgroundSection = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "mee.jpg" }) {
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
            <div className="color-overlay">
              <div className="container">
                <div className="contact-content">
                  <h1>About me</h1>
                  <p>
                    I’m a creative front-end developer with extensive knowledge and great interest
                    in developing responsive, well-functioning and good looking solutions for the
                    web.
                  </p>
                </div>
              </div>
            </div>
            <div className="navigate">
              <a href="#contact">Contact</a>
              <i className="arrow" />
            </div>
          </div>
        </BackgroundImage>
      );
    }}
  />
);

export default BackgroundSection;
