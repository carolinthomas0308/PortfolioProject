import React, { useState } from "react";
import video1 from "../assets/Videos/Speridian.mp4";
import video2 from "../assets/Videos/Benefitalign.mp4";
import video3 from "../assets/Videos/TrueCoverage.mp4";


const VideoGallery: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const videos = [
    { src: video1, description: "Speridian Technologies Outbound Training at IABS Farm Sanctuary" },
    { src: video2, description: "Watch and see how to create an individual or family health insurance quote." },
    { src: video3, description: "TrueCoverage is the health insurance marketplace where people can shop from a variety of health care options from the country’s leading health plans." }
  ];

  const handlePlay = (index: number) => {
    setActiveVideo(index);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ marginBottom: "1.5rem" }}>Video Gallery</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {videos.map((vid, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <video
              controls
              onPlay={() => handlePlay(idx)}
              style={{
                width: "100%",
                borderRadius: "12px",
                boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
              }}
            >
              <source src={vid.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Showing description only if this video is active */}
            {activeVideo === idx && (
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#444",
                  textAlign: "center",
                  maxWidth: "90%",
                }}
              >
                {vid.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
