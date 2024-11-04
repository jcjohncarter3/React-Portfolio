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
              <LogoGithub
                  color={'#fff'} 
                  title={"GitHub"}
                  height="25px"
                  width="25px"
              />
        </Link>
          <Link to="/portfolio">
            <LogoLinkedin
                color={'#fff'} 
                title={"LinkedIn"}
                height="25px"
                width="25px"
            />
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
