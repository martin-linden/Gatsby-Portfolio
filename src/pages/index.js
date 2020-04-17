import React from 'react';
/* import Image from '../components/image.js'; */
import '../sass/main.scss';
import Layout from '../components/layout';
import SEO from '../components/seo';
import BackgroundImage from 'gatsby-background-image';
import { graphql } from 'gatsby';
import transitionSVG from '../images/transition.svg';

const IndexPage = (props) => (
	<div>
		<BackgroundImage
			className="masthead"
			fluid={props.data.indexImage.childImageSharp.fluid}
			fadeIn
		>
			<Layout>
				<SEO title="Home" />

				<div className="black-overlay">
					<div className="content-box">
						<h1>This is where my h1 tag goes</h1>
						<h2>This is my sub head</h2>
					</div>
				</div>
			</Layout>
		</BackgroundImage>
		<img id="transition" src={transitionSVG} />
	</div>
);

export default IndexPage;

export const pageQuery = graphql`
	query {
		indexImage: file(relativePath: { eq: "landscape.png" }) {
			childImageSharp {
				fluid(maxWidth: 1800) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;
