interface Props {
  search: string;
  setSearch: (v: string) => void;
  selectedTech: string;
  setSelectedTech: (v: string) => void;
  techs: string[];
}

export default function ProjectFilter({
  search,
  setSearch,
  selectedTech,
  setSelectedTech,
  techs
}: Props) {
  return (
    <div className="project-filter">
      <input
        type="text"
        className="filter-input"
        placeholder="Search projects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="filter-select"
        value={selectedTech}
        onChange={(e) => setSelectedTech(e.target.value)}
      >
        <option value="">All Technologies</option>
        {techs.map((tech) => (
          <option key={tech} value={tech}>
            {tech}
          </option>
        ))}
      </select>
    </div>
  );
}
