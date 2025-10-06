import React from "react";
import { FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";
import advertisementAnalysis from "../assets/Advertisement Analysis.pdf";
import vpsSeminar from "../assets/VPS.pdf";

interface Project {
  title: string;
  description: string;
  link?: string;
  type: "report" | "live";
  tech: string[];
}

const majorProjects: Project[] = [
  {
    title: "TrueCoverage",
    description: "Health insurance web app for customers. Integrated policy selection, payment gateway, and responsive front-end.",
    link: "https://truecoverage.com",
    type: "live",
    tech: ["Java11 | Springboot, Microservices", "MariaDB", "Rediscache"]
  },
  {
    title: "BenefitAlign | BrokerEngage",
    description: "Agent portal for health insurance policies with dashboard and reporting features.Insurance platform built with Java and Dotnet. Handles agent logins, customer policy creation, and backend data management.",
    link: "https://benefitalign.com",
    type: "live",
    tech: ["Java8 | Springboot", "SQLDB","Rediscache"]
  },
  {
    title: "Advertisement Analysis Using Deep Learning",
    description: "Analyse the type of video and suggest advertisements accordingly.",
    link: advertisementAnalysis,
    type: "report",
    tech: ["Python", "TensorFlow", "OpenCV"]
  }
];

const seminarProjects: Project[] = [
  {
    title: "Visual Positioning System (VPS)",
    description: "Visual-GPS to locate objects in indoor/outdoor locations. Seminar project demonstrating vision-based localization.",
    link: vpsSeminar,
    type: "report",
    tech: ["Python", "OpenCV", "SLAM"]
  }
];

const Projects: React.FC = () => {
  const renderProjectList = (projects: Project[]) => (
    <ul className="projects-list">
      {projects.map((project, idx) => (
        <li key={idx}>
          <div className="project-header">
            <span className="project-title">{project.title}</span>
            <div className="project-links">
              {project.link && project.type === "report" && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" title="View Report">
                  <FaFilePdf />
                </a>
              )}
              {project.link && project.type === "live" && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" title="Visit Live Site">
                  <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </div>
          <p className="project-desc">{project.description}</p>
          <div className="tech-tags">
            {project.tech.map((tech) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="projects-section">
      <h1>Major Projects</h1>
      {renderProjectList(majorProjects)}

      <h1>Seminar / Minor Projects</h1>
      {renderProjectList(seminarProjects)}
    </div>
  );
};

export default Projects;
