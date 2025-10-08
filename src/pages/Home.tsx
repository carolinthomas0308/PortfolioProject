import React from "react";

const Home: React.FC = () => {
  const skills = ["Java", "SQL/MariaDB Databases", "Redis Cache", "Git"];
  const featuredProjects = ["AD Analysis using deep learning", "TrueCoverage", "BrokerEngage"];

  return (
    <div className="container">
      {/* Home Section */}
      <section style={{ marginBottom: "2rem" }}>
        <h1>Hi, I’m Carolin Thomas</h1>
        <p>
          Welcome to my portfolio, this is a collection of my projects and experiences, 
          showing what I’ve learned and what I enjoy creating in software.
        </p>
        <section style={{ textAlign: "center", marginTop: "3rem" }}>
                  <button className="button" onClick={() => window.location.href = "/PortfolioProject/projects"}>
          View My Work
        </button>
        </section>

      </section>

      {/* Skills Section */}
      <section className="skills">
        {skills.map(skill => (
          <div key={skill} className="skill-card">{skill}</div>
        ))}
      </section>

      {/* Featured Projects Section */}
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

      {/* Contact Section */}
      <section style={{ textAlign: "center", marginTop: "3rem" }}>
        <p>Let’s build something amazing together!</p>
        <button className="button" onClick={() => window.location.href = "/PortfolioProject/contact"}>
          Contact Me
        </button>
      </section>

    </div>
  );
};

export default Home;
