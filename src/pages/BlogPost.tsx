import { useParams } from "react-router-dom";
import { blogs } from "../data/blog";
import "../styles/pagesstyle/Blog.css";

export default function BlogPost() {
  const { id } = useParams();
  const post = blogs.find((b) => b.id === id);

  if (!post) return <h2>Post not found</h2>;

  return (
    <div className="page-wrapper blog-reader">
      <h1>{post.title}</h1>
      <span className="blog-date">{post.date}</span>
      <p className="blog-content">{post.content}</p>
    </div>
  );
}
