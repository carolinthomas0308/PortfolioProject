import type { VideoItem } from "../../types";
import "../../styles/pagesstyle/Video.css";

export default function VideoCard({ title, file }: VideoItem) {

  // Convert video filename → actual path in /src/assets/Videos/
  const videoSrc = new URL(`../../assets/Videos/${file}`, import.meta.url).href;

  return (
    <div className="video-card">
      <video src={videoSrc} controls className="video-thumb" />
      <p className="video-title">{title}</p>
    </div>
  );
}
