import { useState } from "react";
import "../../styles/pagesstyle/Gallery.css";
import type { GalleryItem } from "../../types";


interface FilterBarProps {
  data: GalleryItem[];
  setFiltered: React.Dispatch<React.SetStateAction<GalleryItem[]>>;
}


export default function FilterBar({ data, setFiltered }: FilterBarProps) {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    const filteredItems = data.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFiltered(filteredItems);
  };

  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search gallery..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
}
