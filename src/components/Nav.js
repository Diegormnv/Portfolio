import React from "react";
import { Link } from "react-scroll";
import github from "../assests/Github-512.png";
import linkedIn from "../assests/linkedin.png";

const Nav = (props) => {
  return (
    <div className="navigation">
      <ul className="nav-links">
        <li className="nav-item">
          <Link to="header-container">Home</Link>
        </li>

        <li className="nav-item">
          <Link to="projects-container">Projects</Link>
        </li>

        <li className="nav-item">
          <Link to="about-container">About</Link>
        </li>

        <li className="nav-item">
          <Link to="contact-container">Contact</Link>
        </li>
      </ul>
      <a href="https://github.com/Diegormnv">
        <img className="links" src={github} alt="github" />
      </a>
      <a href="https://www.linkedin.com/in/diego-roman-743897142/">
        <img className="links" src={linkedIn} alt="LinkedIn" />
      </a>
    </div>
  );
};

export default Nav;
