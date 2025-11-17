Portfolio Website — Carolin Thomas

A modern, animated, fully responsive portfolio built using React, TypeScript, Vite, GSAP, and EmailJS, showcasing my experience, projects, achievements, gallery, education timeline, blogs, and contact system.

This project was created as part of CS5709 Digital Portfolio – Assignment Phase 2 & Phase 3, with a focus on modularity, animation, dynamic data management, API usage, CI/CD deployment, and improved UI/UX.

Live Website

🔗 https://carolinthomas0308.github.io/PortfolioProject/

 Phase 2 & Phase 3 Requirements — Completed
✔ Enhanced UI/UX (GSAP animations, gradients, responsive layout)
✔ Modular codebase with separated components
✔ Dynamic JSON-driven content
✔ Search + Filter (Projects)
✔ Dark / Light Mode using custom hook
✔ EmailJS API integration for Contact form
✔ Education + Experience Timeline with GSAP ScrollTrigger
✔ Achievements Page (Phase 3)
✔ Blog Page + Blog Preview (Phase 3)
✔ Project Modal (Phase 3)
✔ Gallery + Video Gallery with animations
✔ CI/CD deployment using GitHub Actions
✔ Comprehensive documentation and reflection
✔ GitHub Pages hosting with HashRouter support
🛠 Tech Stack

React + TypeScript

Vite

GSAP (Animations / ScrollTrigger)

EmailJS (API for Contact form)

GitHub Actions (CI/CD)

JSON data rendering

Modern CSS + Responsive layout

Project Structure
src/
  components/
    Header/
    Footer/
    Projects/
    Experience/
    Gallery/
    Video/
  pages/
    Home.tsx
    About.tsx
    Experience.tsx
    Education.tsx
    Projects.tsx
    Achievements.tsx
    Blog.tsx
    Gallery.tsx
    VideoGallery.tsx
    Contact.tsx
  hooks/
    useDarkMode.ts
  data/
    experience.json
    education.json
    gallery.json
    videos.json
    achievements.ts
    blogs.ts
  styles/
    pagesstyle/
    components/

 Key Features
 1. GSAP Animated Interface

Smooth hero animations

Timeline scroll animations (Experience & Education)

Gallery & Video fade-in effects

Animated cards and page transitions

Modal animation for Projects

2.  Dark / Light Mode Toggle

Implemented using a custom React hook

Maintains state across pages

Applies global theme changes to all sections

3.  Dynamic JSON Rendering

All portfolio content is stored in JSON/TS data files:

Projects

Experiences

Education

Achievements

Blog posts

Gallery images

Videos

No hardcoded content → fully modular and maintainable.

4.  Projects Page With Filters

Filter by technology

Live search

Category classification

Project Modal with detailed view

Icons for GitHub, Live, PDF

5.  Blog System

Fully dynamic blog list

Individual blog view

Blog preview shown on Home page

6. EmailJS Contact API

Sends email directly from Contact page

Auto-reply email

No backend required

Uses:

Public key: B3a2czu7SzYDWqoMm

User template: template_jimu6l8

Auto reply: template_25ejb1s

7.  CI/CD Deployment

This project uses a full CI/CD pipeline with **GitHub Actions**, automatically:

- Installs dependencies
- Builds production bundle
- Deploys `/dist` to GitHub Pages
- Runs on every push to `main`

Workflow file: `.github/workflows/deploy.yml`


name: Deploy Portfolio

on:
  push:
    branches: ["main", "FirstPortfolio"]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Build project
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist

Contact Form Setup (EmailJS)

EmailJS integration:

Public Key: B3a2czu7SzYDWqoMm
User Template ID: template_jimu6l8
Auto Reply Template ID: template_25ejb1s


Uses emailjs.sendForm() inside React.

Achievements (Phase 3 Feature)

5+ years backend engineering experience across TrueCoverage, BrokerEngage, Benefitalign

Optimized APIs using Redis + Database indexing

Built AD Analysis deep learning model using TensorFlow

Implemented full CI/CD pipeline using GitHub Actions

Automated deployment and modularized entire project

Reflection

Peer feedback highlighted improvements needed in:

Folder structure

Code modularity

Comments & documentation

Navigation clarity

UI/UX consistency

Interactivity

I improved the portfolio by:

Fully restructuring pages and components

Adding JSON-driven content

Introducing GSAP animations

Implementing dark mode

Adding search/filter

Adding a blog system and achievements page

Implementing CI/CD deployment

Improving user flow and responsiveness

This assignment helped me understand modern frontend architecture, React modularity, animation libraries, and deployment automation.

 Running the Project Locally
npm install
npm run dev

 Build for Production
npm run build

Contact

 Email: carolinthomas0308@gmail.com

 Resume: Available on About page