Portfolio Website — Carolin Thomas

A modern, animated, fully responsive portfolio built using React, TypeScript, Vite, GSAP, EmailJS, and Lazy Loading, showcasing my experience, projects, achievements, blog, gallery, education timeline, and contact system.

This project was developed for CS5709 Digital Portfolio — Phase 2 & Phase 3, focusing on modularity, animation, performance optimisation, API integration, CI/CD, and improved UI/UX.

> Live Website

>> https://carolinthomas0308.github.io/PortfolioProject/#/

Phase 2 & Phase 3 Requirements Completed
Core Features

✔ Modular codebase with separated components
✔ Dynamic content using JSON/TS data
✔ Dark / Light Mode (state managed)
✔ Fully responsive layout
✔ GSAP animations + ScrollTrigger
✔ Lazy loading using React.lazy() + Suspense
✔ Image lazy loading (loading="lazy") (optional)
✔ Video Gallery with animations
✔ Gallery with smooth transitions
✔ Education & Experience Timeline
✔ Blog page + individual blog posts
✔ Achievements page
✔ Project filtering + Project Details Modal
✔ EmailJS contact form + auto-reply
✔ GitHub Actions CI/CD deployment
✔ GitHub Pages hosting with HashRouter support

> Tech Stack

React + TypeScript

Vite

GSAP + ScrollTrigger

React.lazy & Suspense (Lazy Loading)

EmailJS

JSON/TS Data Rendering

GitHub Actions (CI/CD)

CSS Animations & Responsive Design

> Project Structure
src/
│
├── assets/
│   ├── Images/
│   ├── Reports/
│   ├── Videos/
│   ├── CarolinThomas_Resume.pdf
│
├── components/
│   ├── Education/
│   │   ├── EducationItem.tsx
│   │   └── EducationTimeline.tsx
│   │
│   ├── Experience/
│   │   ├── ExperienceDetailsModel.tsx
│   │   ├── ExperienceItem.tsx
│   │   └── ExperienceTimeline.tsx
│   │
│   ├── Footer/
│   │   ├── Footer.css
│   │   └── Footer.tsx
│   │
│   ├── Gallery/
│   │   ├── FilterBar.tsx
│   │   ├── GalleryGrid.tsx
│   │   ├── GalleryItem.tsx
│   │   └── Lightbox.tsx
│   │
│   ├── Header/
│   │   ├── Header.css
│   │   └── Header.tsx
│   │
│   ├── Hero/
│   │   ├── Hero.css
│   │   └── Hero.tsx
│   │
│   ├── Navbar/
│   │   └── (navbar files)
│   │
│   ├── Projects/
│   │   ├── ProjectFilter.tsx
│   │   ├── ProjectItem.tsx
│   │   ├── ProjectList.tsx
│   │   └── ProjectModel.tsx
│   │
│   └── Video/
│       ├── SearchBar.tsx
│       ├── VideoCard.tsx
│       └── VideoList.tsx
│
├── data/
│   ├── achievements.ts
│   ├── blog.ts
│   ├── education.json
│   ├── experience.json
│   ├── gallery.json
│   ├── projects.json
│   ├── projects.ts
│   └── videos.json
│
├── hooks/
│   └── useDarkMode.ts
│
├── pages/
│   ├── About.tsx
│   ├── Achievements.tsx
│   ├── Blog.tsx
│   ├── BlogPost.tsx
│   ├── Contact.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Gallery.tsx
│   ├── Home.tsx
│   ├── Projects.tsx
│   └── VideoGallery.tsx
│
├── styles/
│   ├── pagestyle/
│   │   ├── About.css
│   │   ├── Achievement.css
│   │   ├── Blog.css
│   │   ├── Contact.css
│   │   ├── Education.css
│   │   ├── Experience.css
│   │   ├── Gallery.css
│   │   ├── Home.css
│   │   ├── ProjectModel.css
│   │   ├── Projects.css
│   │   └── Video.css
│
├── types/
│   └── index.ts
│
├── App.css
├── App.tsx
├── index.css
├── main.tsx
└── Portfolio.tsx


> Key Features
1. Lazy Loading for Better Performance

Implemented using:

const Projects = lazy(() => import("./pages/Projects"));
const Gallery = lazy(() => import("./pages/Gallery"));


Wrapped in:

<Suspense fallback={<div>Loading...</div>}>


This reduces initial load time and improves performance.

2. GSAP Animated Interface

Smooth hero animations

Timeline scroll animations

Fade-in effects for Gallery / Video

Animated cards and transitions

ScrollTrigger timeline effects

3. Dark / Light Mode Toggle

Custom React hook

Global theme state

Works across all pages

4. Dynamic JSON/TS Rendering

All portfolio content comes from data files:

Projects

Blogs

Experience

Education

Achievements

Gallery

Videos

No hardcoded content → fully maintainable.

5. Project Filtering + Modal

Filter by technology

Live search

Modal view with project details, links, and technologies

6. Blog System

Blog previews

Each blog has its own dynamic page

JSON-driven

7. EmailJS Contact Form

Sends email directly

Auto-reply

No backend needed

8. CI/CD Deployment with GitHub Actions

Workflow automatically:

Installs dependencies

Builds production bundle

Deploys to GitHub Pages

> Running the Project Locally
npm install
npm run dev

> Build for Production
npm run build

> Contact

Email: carolinthomas0308@gmail.com

Resume available on the About page.