import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css//Nav.css';
import Footer from '../Components/Footer';
const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/clock" className="nav-link">Clock</Link>
        </li>
        <li className="nav-item">
          <Link to="/nasa" className="nav-link">NASA</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
