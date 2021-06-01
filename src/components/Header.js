import React from "react";
import github from "../assests/Github-512.png";
import linkedIn from "../assests/linkedin.png";
import resume from "../assests/iconmonstr-cv-2.svg";

const Header = () => {
  return (
    <div className="header-container">
      <div className="img-container"></div>
      <div classname="name">
        <h1>DIEGO ROMAN</h1>
        <div className="contact">
          <a href="https://github.com/Diegormnv">
            <img className="links" src={github} alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/diego-roman-743897142/">
            <img className="links" src={linkedIn} alt="LinkedIn" />
          </a>
          <a href="">
            <img className="links" src={resume} alt="resume" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
