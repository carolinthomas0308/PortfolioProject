import React from "react";

const Blog: React.FC = () => {
  const posts = [
    { title: "How I built a React portfolio from scratch", summary: "Step-by-step guide to building a personal website" },
  ];

  return (
    <div style={{ padding: "2rem" }}>
      {/* Sample Content - will add redirection in future. */}
      <h1>Blog</h1>
      {posts.map((post, idx) => (
        <div key={idx} style={{ marginBottom: "1.5rem", border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
          <h3>{post.title}</h3>
          <p>{post.summary}</p>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Blog;
