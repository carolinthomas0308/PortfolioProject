import React from "react";
import profilePic from "../assets/Carolin.jpg";
import resumePDF from "../assets/CarolinThomas_Resume.pdf";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Me</h1>
        <p>Get to know more about my journey, skills, and experience.</p>
      </div>

      <div className="about-content">
        {/* Profile Image */}
        <div className="about-image">
          <img src={profilePic} alt="Carolin Thomas" />
        </div>

        {/*About Me */}
        <div className="about-text">
          <h2>Hi, I'm Carolin</h2>
          <p>
            I am currently pursuing my <strong>Master’s in Software
            Engineering at the University of Limerick</strong>. Before this, I
            worked for <strong>5.5 years as a Java Developer</strong>,
            specializing in backend systems, enterprise applications, and web
            platforms.
          </p>
          <p>
            My expertise includes <strong>Java, SQL/MariaDB, Redis, Git, and
            cloud-based solutions</strong>. I enjoy building scalable and
            maintainable software while learning and applying new technologies.
          </p>
          <p>
            Outside of coding, I enjoy problem-solving, exploring new tools, and
            collaborating on innovative projects.
          </p>

          {/* Resume Button */}
          <div className="about-buttons">
            <a href={resumePDF} download className="btn">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
