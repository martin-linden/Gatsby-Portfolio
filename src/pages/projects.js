import React from 'react';
import '../sass/main.scss';
import BrandWineEstates from '../components/projectComponents/brandWineEstates';
import BirdsEyeView from '../components/projectComponents/birdsEyeView';

const ProjectPage = () => (
	<div className="project-border">
		<div className="project-header-wrapper">
			<h1 className="page-header">Projects</h1>
			<hr className="line" />
		</div>
		<BrandWineEstates />
		<BirdsEyeView />
	</div>
);

export default ProjectPage;
