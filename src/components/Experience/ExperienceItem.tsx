/**
 * Item component
 * Represents a single data-driven entry rendered within a timeline or list.
 * Receives structured data via props and focuses only on presentation logic.
 * Designed to be reusable and maintainable as content evolves.
 */

import type { Experience } from "../../types";
import "../../styles/pagesstyle/Experience.css";

export default function ExperienceItem(exp: Experience) {
  return (
    <div className="exp-card">
      <div className="exp-header">
        <h3>{exp.title}</h3>
        <span className="exp-period">{exp.period}</span>
      </div>

      <p className="exp-company">{exp.company}</p>
      <p className="exp-description">{exp.description}</p>

      <div className="exp-tech-list">
        {exp.technologies?.map((tech) => (
          <span key={tech} className="exp-tech-pill">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
