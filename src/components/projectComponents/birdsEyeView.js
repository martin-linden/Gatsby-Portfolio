import React from 'react';
import '../../sass/main.scss';
import { Link } from 'gatsby';
import Bird from '../../images/bird.svg';

const BrandWineEstates = () => (
	<div className="project-wrapper-reverse">
		<div className="project-content-wrapper">
			<div className="page-content">
				<h1 className="project-header">Birds Eye View</h1>
				<p className="project-text">
					Birds Eye View is a data visualization dashboard for
					displaying graphs on environmental pollution with data
					being sourced from Statistics Sweden. Frontend built
					with React. User authentication and database built with
					Firebase.
				</p>
				<div className="link-container">
					{/* <Link className="link2" to="/Read more/">
					About me
				</Link> */}
					<a
						href="https://github.com/butalsoverycool/fe19tp2_apple"
						className="link2"
					>
						Github
					</a>
				</div>
			</div>
		</div>
		<div className="project-image-wrapper">
			<img
				className="project-image"
				alt="Birds Eye Wiew Logo"
				src={Bird}
			/>
		</div>
	</div>
);

export default BrandWineEstates;
