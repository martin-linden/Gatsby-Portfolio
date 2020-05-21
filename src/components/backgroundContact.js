import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Header from '../components/header';

const BackgroundSection = () => (
	<StaticQuery
		query={graphql`
			query {
				desktop: file(relativePath: { eq: "me.jpg" }) {
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
						<div className="color-overlay">
							<Header />
							<div className="contact-content">
								<h1>About me</h1>
								<p>
									I’m a creative front-end developer with
									extensive knowledge and great interest
									in developing responsive,
									well-functioning and stylish solutions
									for the web.
								</p>
							</div>
						</div>
					</div>
				</BackgroundImage>
			);
		}}
	/>
);

export default BackgroundSection;
