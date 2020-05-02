import React from 'react';
import '../../sass/main.scss';
import { Link } from 'gatsby';
import Chart from '../../images/Chart.svg';

const BrandWineEstates = () => (
	<div className="project-wrapper-reverse">
		<div className="project-content-wrapper">
			<div className="page-content">
				<h1 className="project-header">Birds Eye View</h1>
				<p className="project-text">
					Birds Eye View or BEV, is a school project hfuh
					fdsfdsfs fdsfdsfs fdsfsdfs fgsfs fgsf dg dfgdfsg
					fdgdfsg gsfdgfds ggfsdgd
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
			<img className="project-image-2" src={Chart} />
		</div>
	</div>
);

export default BrandWineEstates;
