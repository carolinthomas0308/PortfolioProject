/* Phase 1 and 2 code commented for reference

import React from "react";
import { FaGraduationCap, FaSchool, FaBook } from "react-icons/fa";

const Education: React.FC = () => {
  const educationHistory = [
    {
      year: "2015–2019",
      degree: "Bachelor's in Computer Science",
      school: "SJCET, Palai, Kerala, India",
      icon: <FaGraduationCap />
    },
    {
      year: "2013–2015",
      degree: "Higher Secondary School",
      school: "International Indian School, Dammam, KSA",
      icon: <FaSchool />
    }
  ];

  // Separate technical and soft skills
  const technicalSkills = ["Java", "Databases", "REST APIs"];
  const softSkills = ["Leadership", "Time Management", "Teamwork", "Communication"];

  return (
    <div className="education-container">
      <h1>Education & Skills</h1>

    
      <div className="timeline">
        {educationHistory.map((edu, index) => (
          <div key={index} className="timeline-card">
            <div className="timeline-icon">{edu.icon}</div>
            <div className="timeline-content">
              <h3>{edu.degree}</h3>
              <p>{edu.school}</p>
              <span>{edu.year}</span>
            </div>
          </div>
        ))}
      </div>

   
      <h2>Technical Skills</h2>
      <div className="skills-container">
        {technicalSkills.map((skill) => (
          <span key={skill} className="skill-pill">
            <FaBook /> {skill}
          </span>
        ))}
      </div>

      <h2>Soft Skills</h2>
      <div className="skills-container">
        {softSkills.map((skill) => (
          <span key={skill} className="skill-pill soft-skill">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Education;
*/

import EducationTimeline from "../components/Education/EducationTimeline";

export default function Education() {
  return (
    <div className="page-wrapper">
      <h1 className="page-title">Education</h1>
      <EducationTimeline />
    </div>
  );
}
