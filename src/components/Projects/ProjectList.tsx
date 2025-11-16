import { useEffect, useRef, useState } from "react";
import { projects } from "../../data/projects";
import type { ProjectItem } from "../../types";
import ProjectItemCard from "./ProjectItem";
import ProjectModel from "./ProjectModel";
import { gsap } from "gsap";

export default function ProjectList({ search, selectedTech }: any) {
  const listRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    if (listRef.current) {
      gsap.from(listRef.current.children, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.15
      });
    }
  }, [search, selectedTech]);

  const filtered: ProjectItem[] = projects.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());

    const matchTech = selectedTech === "" || p.technologies.includes(selectedTech);

    return matchSearch && matchTech;
  });

  return (
    <>
      <div className="projects-grid" ref={listRef}>
        {filtered.map((proj, i) => (
          <div key={i} onClick={() => setSelectedProject(proj)}>
            <ProjectItemCard {...proj} />
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModel
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
