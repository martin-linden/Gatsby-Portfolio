import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

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
        <BackgroundImage
          className="bg-container"
          Tag="section"
          fluid={imageData}
          backgroundColor={`#040e18`}
          fadeIn
          style={{ height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></BackgroundImage>
      );
    }}
  />
);

export default BackgroundSection;
