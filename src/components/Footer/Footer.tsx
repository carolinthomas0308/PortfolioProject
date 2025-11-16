import "./Footer.css";
import useDarkMode from "../../hooks/useDarkMode";

export default function Footer() {
  const { darkMode } = useDarkMode();

  return (
    <footer className={`footer ${darkMode ? "dark" : "light"}`}>
      <p className="footer-text">
        © {new Date().getFullYear()} Carolin Thomas • All Rights Reserved
      </p>
      
      <div className="footer-links">
        <a href="https://www.linkedin.com" target="_blank">LinkedIn</a>
        <a href="https://github.com" target="_blank">GitHub</a>
        <a href="mailto:carolinthomas0308@gmail.com">Email</a>
      </div>
    </footer>
  );
}
