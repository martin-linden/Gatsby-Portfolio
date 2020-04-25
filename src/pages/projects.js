import React from 'react';
import '../sass/main.scss';
import BrandWineEstates from '../components/brandWineEstates.js';

const ProjectPage = () => (
	<div>
		<div className="project-header-wrapper">
			<h1 className="page-header">Projects</h1>
			<hr className="line" />
		</div>
		<BrandWineEstates />
	</div>
);

export default ProjectPage;
