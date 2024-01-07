import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/list">Lists Overview</Link></li>
      {/* Add other navigation links as needed */}
    </ul>
  </nav>
);

export default Navbar;
