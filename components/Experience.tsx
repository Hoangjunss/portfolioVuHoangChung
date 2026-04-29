"use client";

import { portfolioData } from "@/lib/data";
import { BiBriefcase } from "react-icons/bi";

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up">
          <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-muted-foreground mb-12 animate-fade-in-up [animation-delay:0.1s]">
          My professional journey building scalable backend systems
        </p>

        <div className="space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <div
              key={index}
              className="glass-card animate-fade-in-up flex gap-4"
              style={{ animationDelay: `${0.1 * (index + 2)}s` }}
            >
              <div className="flex-shrink-0 mt-1">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 text-primary">
                  <BiBriefcase className="w-6 h-6" />
                </div>
              </div>

              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-bold">{exp.company}</h3>
                    <p className="text-primary font-semibold">{exp.position}</p>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 sm:mt-0 text-right">
                    <p>
                      {exp.startDate} — {exp.endDate}
                    </p>
                    <p className="text-xs">{exp.location}</p>
                  </div>
                </div>

                {/* Achievements */}
                <ul className="space-y-2 mt-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-muted-foreground text-sm">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
