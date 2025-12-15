/**
 * Timeline component
 * Renders a chronological view of items such as education or experience.
 * Dynamically maps over external JSON/TypeScript data and composes item components.
 * Supports animated transitions and evolving content structure.
 */

import { useEffect, useRef } from "react";
import ExperienceItem from "./ExperienceItem";
import experienceDataRaw from "../../data/experience.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Experience } from "../../types";
import "../../styles/pagesstyle/Experience.css";

gsap.registerPlugin(ScrollTrigger);

const experienceData = experienceDataRaw as Experience[];

export default function ExperienceTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (timelineRef.current) {
      gsap.from(timelineRef.current.children, {
        opacity: 0.3,
        y: 40,
        duration: 0.9,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 85%",
        },
      });
    }
  }, []);

  return (
    <div className="exp-timeline" ref={timelineRef}>
      {experienceData.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </div>
  );
}
