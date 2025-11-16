import type { VideoItem } from "../../types";

interface SearchBarProps {
  data: VideoItem[];
  setFiltered: React.Dispatch<React.SetStateAction<VideoItem[]>>;
}

export default function SearchBar({ data, setFiltered }: SearchBarProps) {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const filteredItems = data.filter(item =>
      item.title.toLowerCase().includes(val.toLowerCase())
    );
    setFiltered(filteredItems);
  };

  return <input type="text" placeholder="Search videos..." onChange={handleSearch} />;
}
