import React from 'react';
import '../sass/main.scss';
import { Link } from 'gatsby';
import Wine from '../images/Wine.svg';

const BrandWineEstates = () => (
	<div className="project-wrapper">
		<div>
			<h1 className="project-header">Brand Wine Estates</h1>
			<p className="project-text">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit,
				sed do eiusmod tempor incididunt ut labore et dolore magna
				aliqua. Ut enim ad minim veniam, quis nostrud exercitation
				ullamco laboris nisi ut aliquip ex ea commodo consequat.
				Duis aute irure dolor
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
		<img className="project-image" src={Wine} />
	</div>
);

export default BrandWineEstates;
