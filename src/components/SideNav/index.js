import React from 'react';
import { Link } from 'gatsby';

export default function SideNav() {
  return (
    <ul className="sidenav-container">
      <li>
        <Link to="/" activeClassName="active-link">
          <div className="button-container">
            <button />
          </div>
        </Link>
      </li>
      <li>
        <div className="button-container">
          <button />
        </div>
      </li>
      <li>
        <Link to="/contact" activeClassName="active-link">
          <div className="button-container">
            <button />
          </div>
        </Link>
      </li>
    </ul>
  );
}
