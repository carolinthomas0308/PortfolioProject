import "./Experience.css";

interface ModalProps {
  onClose: () => void;
  title: string;
  company: string;
  description: string;
  technologies: string[];
}

export default function ExperienceDetailModal({
  onClose,
  title,
  company,
  description,
  technologies,
}: ModalProps) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <h4>{company}</h4>
        <p>{description}</p>
        <p><strong>Technologies:</strong> {technologies.join(", ")}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
