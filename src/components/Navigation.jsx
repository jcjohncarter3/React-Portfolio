import React from "react";
// import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="main-nav">
      <Link to="/about">About Me</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/resume">Resume</Link>
    </nav>
  );
}

export default Navigation;
