import React from 'react';
import '../App.css';

import {Link} from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <nav>
      <ul className="nav-links">
        <Link to="/" style={navStyle}>
          {' '}
          <li>Home</li>
        </Link>
        <Link to="/semester" style={navStyle}>
          <li>Semester</li>
        </Link>
        <Link to="/courses" style={navStyle}>
          <li>Courses</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
