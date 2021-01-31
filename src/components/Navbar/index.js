import { Link } from 'gatsby';
import React from 'react';
import Logo from '../../Assets/images/new-logo.svg';
import NeoButtons from '../NeoButtons/index';

const Header = () => (
  <div className="nav-container">
    <div className="flex-container">
      <Link to="/">
        <img id="logo" alt="Martin Linden Logo" src={Logo} />
      </Link>
      <div className="link-wrapper">
        <Link activeClassName="active-link" to="/">
          <h5 className="link">Home/Projects</h5>
        </Link>
        {/*  <Link activeClassName="active-link" to="/dev">
        <h5 className="link">Dev</h5>
      </Link>
      <Link activeClassName="active-link" to="/music">
        <h5 className="link">Music</h5>
      </Link> */}
        <Link activeClassName="active-link" to="/contact/">
          <h5 className="link">About/Contact</h5>
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
