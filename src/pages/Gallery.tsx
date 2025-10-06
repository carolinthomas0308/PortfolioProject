import React from "react";
import img from "../assets/Gallery/Speridian.jpeg";

const Gallery: React.FC = () => {
  const images: string[] = [img];
  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ marginBottom: "1.5rem" }}>Gallery</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            style={{
              overflow: "hidden",
              borderRadius: "12px",
              boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={img}
              alt={`Gallery image ${idx + 1}`}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
