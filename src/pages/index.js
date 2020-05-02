import React from 'react';
/* import Image from '../components/image.js'; */
import '../sass/main.scss';
import Header from '../components/header';
import SEO from '../components/seo';
import BackgroundImage from 'gatsby-background-image';
import { graphql } from 'gatsby';
import transitionSVG from '../images/transition.svg';
import ProjectPage from '../pages/projects';
import Footer from '../components/footer';

const IndexPage = (props) => (
	<div>
		<BackgroundImage
			fluid={props.data.indexImage.childImageSharp.fluid}
			fadeIn
		>
			<Header />
			<div className="masthead">
				<div className="content-box">
					<h1 className="h1">Welcome</h1>
					<h2 className="h2">I'm Martin Lindén</h2>
					<hr id="line" />
					<h2 className="h2">Front-end Developer</h2>
				</div>
				<img id="transition" src={transitionSVG} />
			</div>
		</BackgroundImage>
		<ProjectPage />
		<Footer />
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
