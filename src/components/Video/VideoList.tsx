/**
 * List component responsible for rendering a collection of items.
 * Data is sourced externally and rendered dynamically to support scalability.
 */

import { useEffect, useRef } from "react";
//import videoDataRaw from "../../data/videos.json";
import type { VideoItem } from "../../types";
import VideoCard from "./VideoCard";
import { gsap } from "gsap";
import "../../styles/pagesstyle/Video.css";

//const videoData = videoDataRaw as VideoItem[];

export default function VideoList({ items }: { items: VideoItem[] }) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      gsap.from(gridRef.current.children, {
        opacity: 0.3,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15
      });
    }
  }, []);

  return (
    <div className="video-grid" ref={gridRef}>
      {items.map((video, index) => (
  <VideoCard key={index} {...video} />
      ))}
    </div>
  );
}
