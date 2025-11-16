export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface GalleryItem {
  title: string;
  image: string;
  category: string;
}

export interface VideoItem {
  title: string;
  file: string;
}
export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  type: string;
}
export interface ProjectData {
  major: ProjectItem[];
  seminar: ProjectItem[];
}
export interface Education {
  degree: string;
  institution: string;
  year: string;
  details: string;
}
export interface BlogPost {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
}
