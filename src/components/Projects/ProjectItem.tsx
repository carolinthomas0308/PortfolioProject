import type { ProjectItem } from "../../types";
import "../../styles/pagesstyle/Projects.css";

export default function ProjectItemCard({
  title,
  description,
  technologies,
  link,
  type
}: ProjectItem) {
  return (
    <div className="project-card">

      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{description}</p>

      <div className="project-tech">
        {technologies.map((tech, i) => (
          <span key={i} className="tech-tag">{tech}</span>
        ))}
      </div>

      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        {type === "live" ? "Visit Site 🌐" : "View Report 📄"}
      </a>
    </div>
  );
}
