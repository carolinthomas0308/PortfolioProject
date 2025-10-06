import React from 'react';
import './App.css';
import myPhoto from './assets/female.png';

const App: React.FC = () => {
  React.useEffect(() => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Header */}
      <header>
        <div className="logo">Carolin Thomas</div>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className="section">
        <h1>About Me</h1>
        <p>
          Hello! I’m Carolin Thomas, master's student at Univeristy of Limerick.
        </p>
        <div className="button-group">
          <button className="btn" onClick={() => scrollToSection('contact')}>Get in Touch</button>
          <button className="btn" onClick={() => scrollToSection('education')}>Education</button>
          <button className="btn" onClick={() => scrollToSection('experience')}>Experience</button>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
  <h1>My Projects</h1>
  <p>
    <strong>BrokerEngage / TrueCoverage:</strong> A healthcare insurance platform where agents can register and manage health insurance plans for customers.
    I was responsible for the backend development, including handling data storage, retrieval, and display, ensuring that all information was processed securely and efficiently.
  </p>
  <p>
    My work focused on creating robust APIs, managing databases, and integrating backend services to support seamless agent interactions and accurate policy management.
  </p>
</section>

      {/* Education Section */}
      <section id="education" className="section">
        <h1>Education</h1>
         <p>
          Masters in Software Engineering – Univeristy Of Limerick, 2025 - present
        </p>
        <p>
          Bachelor’s Degree in Computer Science – SJCET,Palai,Kerala, 2015-2019
        </p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <h1>Experience</h1>
        <p>
          Senior Product Engineer at Speridian Technologies – 2019-2025
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <h1>Contact Me</h1>
        <div className="contact-container">
          <img src={myPhoto} alt="Carolyn Thomas" className="contact-photo" />
          <div className="contact-details">
            <p>Email: carolin.thomas0308@gmail.com</p>
            <p>LinkedIn: linkedin.com/in/carolin-thomas-035441222</p>
            <p>GitHub: github.com/carolinthomas0308</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        &copy; 2025 Carolin Thomas. All rights reserved.
      </footer>
    </>
  );
};

export default App;
