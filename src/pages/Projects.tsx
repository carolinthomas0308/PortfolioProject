/**
 * Projects page
 * Renders project data dynamically with filtering and modal interaction.
 * Data is sourced from external JSON/TypeScript files for maintainability.
 */

import { useState } from "react";
import { projects } from "../data/projects";
import ProjectList from "../components/Projects/ProjectList";
import ProjectFilter from "../components/Projects/ProjectFilter";
import "../styles/pagesstyle/Projects.css";

export default function Projects() {
  const [search, setSearch] = useState("");
  const [selectedTech, setSelectedTech] = useState("");

  // Build unique tech list
  const techs: string[] = [];
  projects.forEach((p) =>
    p.technologies.forEach((t) => {
      if (!techs.includes(t)) techs.push(t);
    })
  );

  return (
    <div className="page-wrapper">
      <h1>Projects</h1>

      <ProjectFilter
        search={search}
        setSearch={setSearch}
        selectedTech={selectedTech}
        setSelectedTech={setSelectedTech}
        techs={techs}
      />

      <ProjectList search={search} selectedTech={selectedTech} />
    </div>
  );
}
