import { useState } from "react";
import VideoList from "../components/Video/VideoList";
import videoDataRaw from "../data/videos.json";
import type { VideoItem } from "../types";

const videoData = videoDataRaw as VideoItem[];

export default function VideoGallery() {
  const [search, setSearch] = useState("");

  const filtered = videoData.filter((v) =>
    v.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-wrapper">
      <h1>Videos</h1>

      <input
        type="text"
        placeholder="Search videos..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <VideoList items={filtered} />
    </div>
  );
}
