import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header>
      <div className="logo">Carolin Thomas</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/education">Education</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/videogallery">Video</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
