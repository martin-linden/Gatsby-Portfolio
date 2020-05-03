import React from 'react';
import Background from '../components/background';
import ProjectPage from '../pages/projects';
import Footer from '../components/footer';
import '../sass/main.scss';

const IndexPage = () => (
	<div>
		<Background />
		<ProjectPage />
		<Footer />
	</div>
);

export default IndexPage;
