/* Phase 1 and 2 code commented for reference
import React from "react";

const Home: React.FC = () => {
  const skills = ["Java", "SQL/MariaDB Databases", "Redis Cache", "Git"];
  const featuredProjects = ["AD Analysis using deep learning", "TrueCoverage", "BrokerEngage"];

  return (
    <div className="container">
      
      <section style={{ marginBottom: "2rem" }}>
        <h1>Hi, I’m Carolin Thomas</h1>
        <p>
          Welcome to my portfolio, this is a collection of my projects and experiences, 
          showing what I’ve learned and what I enjoy creating in software.
        </p>
        <section style={{ textAlign: "center", marginTop: "3rem" }}>
                  <button className="button" onClick={() => window.location.href = "#/projects"}>
          View My Work
        </button>
        </section>

      </section>

      
      <section className="skills">
        {skills.map(skill => (
          <div key={skill} className="skill-card">{skill}</div>
        ))}
      </section>

      
      <section>
        <h2>Featured Projects</h2>
        <div className="projects">
          {featuredProjects.map(project => (
            <div key={project} className="project-card">
              <h3>{project}</h3>
            </div>
          ))}
        </div>
      </section>

    
      <section style={{ textAlign: "center", marginTop: "3rem" }}>
        <p>Let’s build something amazing together!</p>
        <button className="button" onClick={() => window.location.href = "#/contact"}>
          Contact Me
        </button>
      </section>

    </div>
  );
};

export default Home;*/

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/pagesstyle/Home.css";
import { blogs } from "../data/blog";
import { achievements } from "../data/achievements";


export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const skills = ["Java", "SQL / MariaDB", "Redis Cache", "Git"];
  const featuredProjects = [
    "AD Analysis using Deep Learning",
    "TrueCoverage Engineering",
    "BrokerEngage Platform"
  ];

useEffect(() => {
  if (heroRef.current) {
    gsap.to(heroRef.current.children, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      overwrite: "auto"
    });
  }

  if (skillsRef.current) {
    gsap.to(skillsRef.current.children, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      delay: 0.5,
      overwrite: "auto"
    });
  }

  if (projectsRef.current) {
    gsap.to(projectsRef.current.children, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      delay: 0.7,
      overwrite: "auto"
    });
  }
}, []);

  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <section ref={heroRef} className="hero-section">
        <h1 className="hero-title">
          Hi, I’m <span>Carolin Thomas</span>
        </h1>
        <p className="hero-subtitle">
          Software Engineer with strong experience in backend technologies, clean architecture,
          automation, performance optimization, and building scalable systems.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn" onClick={() => (window.location.href = "#/experience")}>
            My Experience
          </button>
          <button className="secondary-btn" onClick={() => (window.location.href = "#/contact")}>
            Contact Me
          </button>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section">
        <h2 className="section-title">Skills</h2>
        <div className="home-skills-grid" ref={skillsRef}>
          {skills.map((skill) => (
            <div className="home-skill-card" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="home-projects-grid" ref={projectsRef}>
          {featuredProjects.map((proj) => (
            <div className="home-project-card" key={proj}>
              <h3>{proj}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* LATEST BLOGS */}
<section className="section">
  <h2 className="section-title">Latest Blogs</h2>

  <div className="home-blog-grid">
    {blogs.slice(0, 3).map((b) => (
      <div className="home-blog-card" key={b.id}>
        <h3>{b.title}</h3>
        <p>{b.summary}</p>
        <a href={`#/blog/${b.id}`} className="read-more">Read More →</a>
      </div>
    ))}
  </div>
</section>

{/* ACHIEVEMENTS PREVIEW */}
<section className="section">
  <h2 className="section-title">Achievements</h2>

  <div className="home-achievements-grid">
    {achievements.slice(0, 2).map((a, i) => (
      <div className="home-achievement-card" key={i}>
        <h3>{a.title}</h3>
        <p>{a.detail}</p>
      </div>
    ))}

    <a href="#/achievements" className="read-more">View All →</a>
  </div>
  </section>
    </div>
  );
}
