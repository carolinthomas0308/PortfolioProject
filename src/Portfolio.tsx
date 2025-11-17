import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import BlogPost from "./pages/BlogPost";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import useDarkMode from "./hooks/useDarkMode";

// Lazy-loaded pages
const Gallery = lazy(() => import("./pages/Gallery"));
const Projects = lazy(() => import("./pages/Projects"));
const Blog = lazy(() => import("./pages/Blog"));
const Achievements = lazy(() => import("./pages/Achievements"));
const Education = lazy(() => import("./pages/Education"));
const VideoGallery = lazy(() => import("./pages/VideoGallery"));

const Portfolio: React.FC = () => {
  const { darkMode } = useDarkMode();

  return (
    <Router>
      <Header />
      <main className={`main-content ${darkMode ? "dark" : "light"}`}>
        <Routes>
          {/* Normal (non-lazy) pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/:id" element={<BlogPost />} />

          {/* Lazy-loaded pages */}
          <Route
            path="/education"
            element={
              <Suspense fallback={<div className="loader">Loading...</div>}>
                <Education />
              </Suspense>
            }
          />

          <Route
            path="/projects"
            element={
              <Suspense fallback={<div className="loader">Loading...</div>}>
                <Projects />
              </Suspense>
            }
          />

          <Route
            path="/achievements"
            element={
              <Suspense fallback={<div className="loader">Loading...</div>}>
                <Achievements />
              </Suspense>
            }
          />

          <Route
            path="/gallery"
            element={
              <Suspense fallback={<div className="loader">Loading...</div>}>
                <Gallery />
              </Suspense>
            }
          />

          <Route
            path="/videogallery"
            element={
              <Suspense fallback={<div className="loader">Loading...</div>}>
                <VideoGallery />
              </Suspense>
            }
          />

          <Route
            path="/blog"
            element={
              <Suspense fallback={<div className="loader">Loading...</div>}>
                <Blog />
              </Suspense>
            }
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default Portfolio;
