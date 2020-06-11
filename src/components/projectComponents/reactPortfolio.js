import React from 'react';
import '../../sass/main.scss';
import { Link } from 'gatsby';
import ReactLogo from '../../images/react-logo.svg';

const ReactPortfolio = () => (
	<div className="project-wrapper">
		<div className="project-content-wrapper">
			<div className="page-content">
				<h1 className="project-header">React Portfolio</h1>
				<p className="project-text">
					This is my first React project, built using React
					Router DOM, Styled Components and a layout made
					entirely out of CSS Grids.
				</p>
				<div className="link-container">
					<a
						className="link2"
						href="https://trusting-wright-cfd560.netlify.app/"
					>
						Visit website
					</a>
					<a
						href="https://github.com/martin-linden/React-Portfolio"
						className="link2"
					>
						Github
					</a>
				</div>
			</div>
		</div>
		<div className="project-image-wrapper">
			<img className="project-image" src={ReactLogo} />
		</div>
	</div>
);

export default ReactPortfolio;
