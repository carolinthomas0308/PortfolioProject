/**
 * Item component
 * Represents a single data-driven entry rendered within a timeline or list.
 * Receives structured data via props and focuses only on presentation logic.
 * Designed to be reusable and maintainable as content evolves.
 */

import type { Education } from "../../types";
import "../../styles/pagesstyle/Education.css";

export default function EducationItem({ degree, institution, year, details }: Education) {
  return (
    <div className="edu-card">
      <div className="edu-icon">🎓</div>

      <div className="edu-content">
        <h3 className="edu-degree">{degree}</h3>
        <p className="edu-inst">{institution}</p>
        <span className="edu-year">{year}</span>
        <p className="edu-details">{details}</p>
      </div>
    </div>
  );
}
