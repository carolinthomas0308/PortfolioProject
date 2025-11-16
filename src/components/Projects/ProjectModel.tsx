import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import type { ProjectItem } from "../../types";
import "../../styles/pagesstyle/ProjectModel.css";

export default function ProjectModel({
  project,
  onClose
}: {
  project: ProjectItem;
  onClose: () => void;
}) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.from(modalRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.4,
      ease: "power3.out"
    });
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-box"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >

        <h2>{project.title}</h2>
        <p>{project.description}</p>

        <h3>Technologies</h3>
        <div className="modal-tech">
          {project.technologies.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        <a href={project.link} target="_blank" className="modal-link">
          {project.type === "live" ? "Visit Website" : "View PDF"}
        </a>

        <button className="modal-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
