import "../../styles/pagesstyle/Gallery.css";

interface LightboxProps {
  src: string;
  onClose: () => void;
}

export default function Lightbox({ src, onClose }: LightboxProps) {
  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt="Gallery item" />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
