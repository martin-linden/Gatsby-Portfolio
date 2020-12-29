import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faEnvelope,
  faHome,
  faProjectDiagram,
  faTasks,
} from '@fortawesome/free-solid-svg-icons';

export default function SideNav() {
  return (
    <ul className="sidenav-container">
      <li>
        <Link to="/" activeClassName="active-link">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faHome} color="#fff" size="xs" className="icon" />
          </div>
        </Link>
      </li>
      <li>
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faCode} color="#fff" size="xs" className="icon" />
        </div>
      </li>
      <li>
        <Link to="/contact" activeClassName="active-link">
          <div className="icon-wrapper">
            <FontAwesomeIcon icon={faEnvelope} color="#fff" size="xs" className="icon" />
          </div>
        </Link>
      </li>
    </ul>
  );
}
