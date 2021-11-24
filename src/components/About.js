import React from "react";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-text">
        <p>
          Hi, I am Diego and I am a Full Stack Web Developer. I have been programming for roughly one year now. 
          Though it is nice to learn and practice skills on random projects, the best feeling is working on projects that would be used out in the real world.
        </p>
        <p>
          Before Lambda I was a college student majoring in chemistry with no certainty in what I would do with the degree.
          I was introduced to Web Development by a family member and enjoyed liked the work they were doing.
          That is when I decided to attend Lambda's Web Development course where they taught me all the skills to be one.
          While attending Lambda I was slowly falling in love with coding for the feeling of solving and overcoming
          challenges.
        </p>
        <p>
          Some of my intrests include technology both software and hardware, videogames amd pottery.
        </p>
      </div>

      <div className="skills-container">
        <h3>Skills and Languages Learned</h3>
        <ul>
          <div className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </div>
          <div className="skills">
            <li>Node.js</li>
            <li>Express</li>
            <li>Python</li>
            <li>SCSS</li>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default About;
