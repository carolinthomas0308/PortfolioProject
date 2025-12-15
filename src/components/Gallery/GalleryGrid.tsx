/**
 * List component responsible for rendering a collection of items.
 * Data is sourced externally and rendered dynamically to support scalability.
 */


import { useEffect, useRef } from "react";
//import galleryDataRaw from "../../data/gallery.json";
import GalleryCard from "./GalleryItem";
import type { GalleryItem } from "../../types";
import { gsap } from "gsap";
import "../../styles/pagesstyle/Gallery.css";

//const galleryData = galleryDataRaw as GalleryItem[];

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const gridRef = useRef<HTMLDivElement>(null);
  
  // Trigger scroll-based animations to enhance user interaction
  // without affecting core data rendering logic
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
    <div className="gallery-grid" ref={gridRef}>
      {items.map((item, index) => (
  <GalleryCard key={index} {...item} />
      ))}
    </div>
  );
}
