import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import '../sass/main.scss';

const Header = ({ siteTitle }) => (
	<React.Fragment>
		<Link id="links" to="/contact/">
			About / Contact
		</Link>
	</React.Fragment>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
