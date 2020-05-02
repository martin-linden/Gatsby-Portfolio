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
					This was my first React project klvfvjdh gfjhsgjf fhhgu
					fhhfugosr hfjhadf fhdiah hfhdafi nlfjdls jlfjsdal
					jkfjsdal jifjislda jifjdsi jifjsiae
				</p>
				<div className="link-container">
					{/* <Link className="link2" to="/Read more/">
					About me
				</Link> */}
					<a
						href="../https://github.com/martin-linden"
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
