import { Link } from 'gatsby';
import React from 'react';
import Logo from '../../Assets/images/new-logo.svg';

const Header = () => (
  <div className="header">
    <Link to="/Home/">
      <img id="logo" alt="Martin Linden Logo" src={Logo} />
    </Link>
    <div id="link-wrapper">
      <Link className="link" to="/contact/" id="link">
        About me / Contact
      </Link>
    </div>
  </div>
);

export default Header;
