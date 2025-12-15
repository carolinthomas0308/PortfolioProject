/**
 * Timeline component
 * Renders a chronological view of items such as education or experience.
 * Dynamically maps over external JSON/TypeScript data and composes item components.
 * Supports animated transitions and evolving content structure.
 */

import { useEffect, useRef } from "react";
import EducationItem from "./EducationItem";
import educationDataRaw from "../../data/education.json";
import type { Education } from "../../types";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/pagesstyle/Education.css";

gsap.registerPlugin(ScrollTrigger);

// Cast JSON properly
const educationData: Education[] = educationDataRaw as Education[];

export default function EducationTimeline() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (timelineRef.current) {
      gsap.from(timelineRef.current.children, {
        opacity: 1,
        x: -40,
        duration: 0.9,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%"
        }
      });
    }
  }, []);

  return (
    <div className="edu-timeline" ref={timelineRef}>
      {educationData.map((edu, index) => (
        <EducationItem key={index} {...edu} />
      ))}
    </div>
  );
}
