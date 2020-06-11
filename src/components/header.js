import { Link } from 'gatsby';
import React from 'react';
import '../sass/main.scss';
import Logo from '../images/new-logo.svg';

const Header = () => (
	<div className="header">
		<Link to="/">
			<img id="logo" alt="Martin Linden Logo" src={Logo} />
		</Link>
		<div id="link-wrapper">
			<Link className="link" to="/contact/">
				About me / Contact
			</Link>
		</div>
	</div>
);

export default Header;
