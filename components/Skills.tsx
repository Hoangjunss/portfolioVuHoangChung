"use client";

import { portfolioData } from "@/lib/data";
import { useEffect } from "react";

export default function Skills() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.1 }
    );
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => observer.observe(el));
    return () => reveals.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="skills" className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 reveal animated-gradient-text">
          Technical Skills
        </h2>
        <p className="text-muted-foreground mb-12 reveal">
          My expertise across various technologies and tools
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills.map((skillGroup, index) => (
            <div
              key={index}
              className="glass-card p-5 reveal transition-all hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-primary mb-3 border-b border-primary/30 pb-1 inline-block">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2 mt-3">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-block px-3 py-1.5 text-sm rounded-full bg-secondary/60 dark:bg-secondary/30 text-secondary-foreground border border-border hover:bg-primary/10 hover:border-primary/30 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}