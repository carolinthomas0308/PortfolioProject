import { achievements } from "../data/achievements";
import "../styles/pagesstyle/Achievement.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Achievements() {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (listRef.current) {
      gsap.from(listRef.current.children, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        stagger: 0.2,
        ease: "power3.out"
      });
    }
  }, []);

  return (
    <div className="page-wrapper">
      <h1>Achievements</h1>

      <div className="achievements-list" ref={listRef}>
        {achievements.map((a, index) => (
          <div className="achievement-card" key={index}>
            <h3>{a.title}</h3>
            <p>{a.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
