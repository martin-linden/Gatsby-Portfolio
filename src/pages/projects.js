import React from 'react';
import '../sass/main.scss';
import BrandWineEstates from '../components/projectComponents/brandWineEstates';
import BirdsEyeView from '../components/projectComponents/birdsEyeView';
import ReactPortfolio from '../components/projectComponents/reactPortfolio';
import Quire from '../components/projectComponents/quire';

const ProjectPage = () => (
	<div className="project-border">
		<div className="project-header-wrapper" id="projects">
			<h1 className="page-header">Projects</h1>
			<hr className="line" />
		</div>
		<BrandWineEstates />
		<BirdsEyeView />
		<ReactPortfolio />
		<Quire />
	</div>
);

export default ProjectPage;
