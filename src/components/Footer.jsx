import React from "react";
// import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';
import { LogoLinkedin } from 'react-ionicons'
import { LogoGithub } from 'react-ionicons'

function Footer() {
  return (
    <footer>

      <Link to="https://github.com/jcjohncarter3">
      <LogoGithub
        color={'#00000'} 
        title={"GitHub"}
        height="25px"
        width="25px"
/></Link>
      <Link to="/portfolio">
        <LogoLinkedin
            color={'#00000'} 
             title={"LinkedIn"}
             height="25px"
            width="25px"
        />
    </Link>

    </footer>
  );
}

export default Footer;
