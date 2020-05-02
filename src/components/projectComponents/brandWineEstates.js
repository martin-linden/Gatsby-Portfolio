import React from 'react';
import '../../sass/main.scss';
import { Link } from 'gatsby';
import Wine from '../../images/Wine.svg';

const BrandWineEstates = () => (
	<div className="project-wrapper">
		<div className="project-content-wrapper">
			<div className="page-content">
				<h1 className="project-header">Brand Wine Estates</h1>
				<p className="project-text">
					Brand Wine Estates work with producers from the classic
					wine countries and regions of Europe. Their producers
					are very dedicated, and combine knowledge and passion
					within the production of wine, to the norwegian and
					swedish market. I got the opportunity to build their
					new website that is currently underway.
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
			<img className="project-image" src={Wine} />
		</div>
	</div>
);

export default BrandWineEstates;
