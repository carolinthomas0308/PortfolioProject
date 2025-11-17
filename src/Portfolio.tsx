import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import VideoGallery from "./pages/VideoGallery";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import useDarkMode from "./hooks/useDarkMode";
import BlogPost from "./pages/BlogPost";
import Achievements from "./pages/Achievements";

const Portfolio: React.FC = () => {
  const { darkMode } = useDarkMode();

  console.log("Portfolio component loaded");

  return (
    <Router>
      <Header />
      <main className={`main-content ${darkMode ? "dark" : "light"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/videogallery" element={<VideoGallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default Portfolio;
