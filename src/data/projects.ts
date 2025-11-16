import type { ProjectItem } from "../types";

export const projects: ProjectItem[] = [
  {
    title: "TrueCoverage",
    description: "Backend engineering microservices for insurance platform.",
    technologies: ["Java 11", "Spring Boot", "MariaDB", "Redis Cache"],
    link: "https://truecoverage.com",
    type: "live"
  },
  {
    title: "BenefitAlign | BrokerEngage",
    description: "Agent portal backend and API engineering.",
    technologies: ["Java 8", "Spring Boot", "SQL DB", "Redis Cache"],
    link: "https://benefitalign.com",
    type: "live"
  },
  {
    title: "Advertisement Analysis Using Deep Learning",
    description: "CNN + OpenCV based advertisement classification.",
    technologies: ["Python", "TensorFlow", "OpenCV"],
    link: "/assets/Reports/AdvertisementAnalysis.pdf",
    type: "report"
  },
  {
    title: "Visual Positioning System (VPS)",
    description: "Indoor SLAM-based positioning system. Seminar Project.",
    technologies: ["Python", "OpenCV", "SLAM"],
    link: "/assets/Reports/VPS.pdf",
    type: "minor"
  }
];
