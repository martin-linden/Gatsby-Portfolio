import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Header from '../components/header';

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
					Tag="section"
					fluid={imageData}
					backgroundColor={`#040e18`}
					fadeIn
				>
					<div className="background-container">
						<Header />
						<div className="content">
							<h1>Welcome</h1>
							<h3>I'm Martin Lindén</h3>
							<h3>Front-end developer</h3>
						</div>
					</div>
				</BackgroundImage>
			);
		}}
	/>
);

export default BackgroundSection;
