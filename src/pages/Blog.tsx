import { blogs } from "../data/blog";
import { Link } from "react-router-dom";
import "../styles/pagesstyle/Blog.css";

export default function Blog() {
  return (
    <div className="page-wrapper">
      <h1>Blog</h1>

      <div className="blog-list">
        {blogs.map((b) => (
          <div className="blog-card" key={b.id}>
            <h3>{b.title}</h3>
            <span className="blog-date">{b.date}</span>
            <p>{b.summary}</p>
            <Link className="read-more" to={`/blog/${b.id}`}>
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
