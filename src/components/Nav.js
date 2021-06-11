import React from "react";
import { Link } from "react-scroll";
import sunicon from "../assests/sunicon.svg";
import moonicon from "../assests/moonicon.svg";

const Nav = ({ darkMode, setDarkMode }) => {
  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

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
      <div
        onClick={toggleMode}
        className={darkMode ? "toggle toggled" : "toggle"}
      />
    </div>
  );
};

export default Nav;
