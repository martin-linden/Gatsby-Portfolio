import { Link } from 'gatsby';
import React from 'react';
import '../sass/main.scss';
import Logo from '../images/logo.svg';

const Header = () => (
	<div className="header">
		<img id="logo" src={Logo} />
		<div id="link-wrapper">
			<Link className="link" to="/contact/">
				About me
			</Link>

			<Link className="link" to="/contact/">
				Contact
			</Link>
		</div>
	</div>
);

export default Header;
