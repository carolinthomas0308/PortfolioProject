import { useState } from "react";
import GalleryGrid from "../components/Gallery/GalleryGrid";
import galleryDataRaw from "../data/gallery.json";
import type { GalleryItem } from "../types";

const galleryData = galleryDataRaw as GalleryItem[];

export default function Gallery() {
  const [search, setSearch] = useState("");

  const filtered = galleryData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-wrapper">
      <h1>Gallery</h1>

      <input
        type="text"
        placeholder="Search gallery..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <GalleryGrid items={filtered} />
    </div>
  );
}
