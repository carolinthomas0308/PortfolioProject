import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import useDarkMode from "../../hooks/useDarkMode";
import "./Hero.css";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    if (heroRef.current) {
      gsap.from(heroRef.current.querySelectorAll(".hero-text"), {
        opacity: 0,
        y: -50,
        duration: 1,
        stagger: 0.3,
      });
    }
  }, []);

  return (
    <section ref={heroRef} className={`hero-section ${darkMode ? "dark" : "light"}`}>
      <div className="hero-content">
        <h1 className="hero-text">Hi, I'm Carolyn Thomas</h1>
        <p className="hero-text">Frontend Developer | React & TypeScript Enthusiast</p>
        <button onClick={toggleDarkMode} className="dark-mode-btn">
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </section>
  );
}
