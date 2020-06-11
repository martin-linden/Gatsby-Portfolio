import React from 'react';
import Background from '../components/background';
import ProjectPage from '../pages/projects';
import Footer from '../components/footer';
import '../sass/main.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Helmet from 'react-helmet';

const IndexPage = () => (
	<React.Fragment>
		<Helmet>
			<title>Martin Lindén - Front-End Developer</title>
			<meta
				name="description"
				content="Front-end developer - HTML, CSS, React, JavaScript"
			/>
			<meta
				property="og:title"
				content="Martin Linden - Front-End Developer"
			/>
		</Helmet>

		<div>
			<Background />
			<ProjectPage />
			<Footer />
		</div>
	</React.Fragment>
);

export default IndexPage;
