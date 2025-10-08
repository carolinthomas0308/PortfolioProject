import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import VideoGallery from "./pages/VideoGallery";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const Portfolio: React.FC = () => {
  return (
     <BrowserRouter basename="/PortfolioProject">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/videogallery" element={<VideoGallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};
export default Portfolio;
