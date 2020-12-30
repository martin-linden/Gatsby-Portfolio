import { Link } from 'gatsby';
import React from 'react';
import Logo from '../../Assets/images/new-logo.svg';
import NeoButtons from '../NeoButtons/index';

const Header = () => (
  <div className="header">
    <Link to="/Home/">
      <img id="logo" alt="Martin Linden Logo" src={Logo} />
    </Link>
    <div className="link-wrapper">
      <Link activeClassName="active-link" to="/">
        <h5 className="link">Home</h5>
      </Link>
      <Link activeClassName="active-link" to="/contact/">
        <h5 className="link">Contact</h5>
      </Link>
    </div>
  </div>
);

export default Header;
