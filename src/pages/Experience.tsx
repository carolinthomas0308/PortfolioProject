/* Phase 1 and 2 code commented for reference

import React from "react"
const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Senior Product Engineer",
      company: "TrueCoverage",
      period: "April 2025 – Aug 2025",
      tasks: [
        "Built backend services for insurance platform",
        "Implemented secure API endpoints",
        "Optimized system performance by 20%",
        "Collaborated closely in Agile teams, participating in sprint planning, daily stand-ups, and retrospectives."
      ]
    },
    {
      role: "Software Engineer",
      company: "BrokerEngage",
      period: "Oct 2019– April 2025",
      tasks: [
        "Developed and optimized scalable backend applications and contributed to key client-facing projects.",
        "Collaborated on project planning and design"
      ]
    }
  ];
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Experience</h1>
      {experiences.map((exp, idx) => (
        <div key={idx} style={{ marginBottom: "2rem" }}>
          <h2>{exp.role} – {exp.company} ({exp.period})</h2>
          <ul>
            {exp.tasks.map((task, i) => <li key={i}>{task}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );};export default Experience;
*/


import ExperienceTimeline from "../components/Experience/ExperienceTimeline";

export default function ExperiencePage() {
  return (
    <div className="page-wrapper">
      <h1 className="page-title">Experience</h1>
      <ExperienceTimeline />
    </div>
  );
}
