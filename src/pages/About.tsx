/* Phase 1 and 2 code commented for reference

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
       
        <div className="about-image">
          <img src={profilePic} alt="Carolin Thomas" />
        </div>

      
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
*/

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import resumePDF from "../assets/CarolinThomas_Resume.pdf";
import profilePic from "../assets/Images/Carolin.jpg";
import "../styles/pagesstyle/About.css";

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (aboutRef.current) {
      gsap.from(aboutRef.current.children, {
        opacity: 0,
        y: 30,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <div className="page-wrapper">
      <section ref={aboutRef} className="about-container">

        <div className="about-left">
          <img
             src={profilePic}
            alt="Carolin Thomas"
            className="about-img"
          />
        </div>

        <div className="about-right">
          <h1 className="about-title">About Me</h1>

          <p className="about-text">
            I am a Software Engineer with strong experience in backend development,
            microservices, API design, automation, and building scalable systems.
            My passion lies in creating meaningful products with clean architecture,
            efficiency, and performance in mind.
          </p>

          <p className="about-text">
            I enjoy solving complex engineering problems and continuously learning
            new technologies. Outside of coding, I enjoy research, creativity,
            and contributing to impactful digital projects.
          </p>

          <div className="about-buttons">
            <button
              className="primary-btn"
              onClick={() => (window.location.href = "#/contact")}
            >
              Contact Me
            </button>

            <a
              href={resumePDF}
              download
              className="secondary-btn"
            >
              Download Resume
            </a>
          </div>
        </div>

      </section>
    </div>
  );
}
