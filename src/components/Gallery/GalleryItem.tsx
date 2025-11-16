import type { GalleryItem as GalleryType } from "../../types";
import "../../styles/pagesstyle/Gallery.css";

export default function GalleryItem({ title, image }: GalleryType) {

  // Convert image filename → actual path in /src/assets/Images/
  const imgSrc = new URL(`../../assets/Images/${image}`, import.meta.url).href;

  return (
    <div className="gallery-card">
      <img src={imgSrc} alt={title} className="gallery-img" />
      <p className="gallery-title">{title}</p>
    </div>
  );
}
