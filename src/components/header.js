import { Link } from 'gatsby';
import React from 'react';
import '../sass/main.scss';
import Logo from '../images/logo.svg';

const Header = () => (
	<div className="header">
		<img id="logo" src={Logo} />
		<Link id="links" to="/contact/">
			About / Contact
		</Link>
	</div>
);

export default Header;
