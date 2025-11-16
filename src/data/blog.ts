import type { BlogPost } from "../types";

export const blogs: BlogPost[] = [
  {
    id: "truecoverage-apis",
    title: "Scaling Insurance APIs at TrueCoverage – What I Learned",
    date: "2024-11-10",
    summary:
      "A breakdown of how I optimized backend API performance at TrueCoverage, improved system stability, and reduced response time using caching and clean architecture principles.",
    content: `
During my work at TrueCoverage, I built and optimized microservices that power their insurance platform.

Key things I learned:

• How to structure scalable REST APIs using Java + Spring Boot  
• Improving performance using Redis Cache  
• Using DTO mappers for clean architecture  
• Reducing DB calls through caching and pagination  
• Testing endpoints using Postman + JUnit  

This project strengthened my backend engineering fundamentals and gave me real experience working with production systems.
    `
  },
  {
    id: "brokerengage-backend",
    title: "Engineering Backend Modules for BrokerEngage",
    date: "2024-10-18",
    summary:
      "My experience building backend modules for BrokerEngage's insurance agent platform including authentication, policy workflows, and data APIs.",
    content: `
BrokerEngage is an agent-facing platform where performance and accuracy are critical.  
Some modules I engineered:

• Authentication + JWT-based token flow  
• Agent dashboard backend (policy counts, renewals, reminders)  
• Customer data APIs with SQL optimization  
• Form automation for insurance workflows  

I also worked with cross-functional teams to test, deploy, and monitor these services in production.
    `
  },
  {
    id: "ad-analysis-ml",
    title: "Deep Learning Project: Advertisement Analysis Using CNN",
    date: "2024-04-05",
    summary:
      "How I built a deep learning model to classify advertisement categories using video frames and OpenCV.",
    content: `
This ML project was one of the most exciting academic works I've done.

Highlights:

• Extracting frames from videos using OpenCV  
• Training CNN model using TensorFlow  
• Predicting advertisement category based on visual patterns  
• Using Grad-CAM for model explainability  
• Exporting results into PDF report  

This project strengthened my interest in AI + Computer Vision.
    `
  }
];
