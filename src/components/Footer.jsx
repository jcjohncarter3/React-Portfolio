import React from "react";
// import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import { LogoLinkedin } from 'react-ionicons'
import { LogoGithub } from 'react-ionicons'

function Footer() {
  return (
    <footer className="footer">
      <p>© John Carter 2024</p>
      <nav>
        <Link to="https://github.com/jcjohncarter3">
        <i className="bi bi-github"></i>
        </Link>
          <Link to="/portfolio">
          <i className="bi bi-linkedin"></i>
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
