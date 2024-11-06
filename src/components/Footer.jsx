import React from "react";
// import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <p>©John Carter 2024</p>
      <nav>
        <Link to="https://github.com/jcjohncarter3">
        <i className="bi bi-github"></i>
        </Link>
          <Link to="https://www.linkedin.com/in/john-carter-9826b295/">
          <i className="bi bi-linkedin"></i>
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
