import { Link } from "react-router-dom";
import useDarkMode from "../../hooks/useDarkMode";
import "./Header.css";

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={`header ${darkMode ? "dark" : "light"}`}>
      <div className="header-left">
        <div className="logo">Carolin Thomas</div>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/education">Education</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/achievements">Achievements</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/videogallery">VideoGallery</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <button className="theme-btn" onClick={toggleDarkMode}>
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </header>
  );
}
