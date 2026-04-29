"use client";

import { portfolioData } from "@/lib/data";
import {
  SiSpringboot,
  SiPostgresql,
  SiDocker,
  SiJunit5,
} from "react-icons/si";

const skillIcons: Record<string, React.ReactNode> = {
  Java: null,
  "Spring Boot": <SiSpringboot className="w-6 h-6" />,
  "Spring MVC": <SiSpringboot className="w-6 h-6" />,
  "Spring Data JPA": <SiSpringboot className="w-6 h-6" />,
  "Spring Security": <SiSpringboot className="w-6 h-6" />,
  PostgreSQL: <SiPostgresql className="w-6 h-6" />,
  MySQL: null,
  Redis: null,
  Docker: <SiDocker className="w-6 h-6" />,
  Git: null,
  "JUnit 5": <SiJunit5 className="w-6 h-6" />,
  Maven: null,
  Postman: null,
};

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up">
          <span className="gradient-text">Technical Skills</span>
        </h2>
        <p className="text-muted-foreground mb-12 animate-fade-in-up [animation-delay:0.1s]">
          Technologies and tools I work with to build scalable backend systems
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.skills.map((skillGroup, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/15 dark:hover:bg-white/10 hover:border-white/30 dark:hover:border-white/20 animate-fade-in-up dark:p-8"
              style={{ animationDelay: `${0.1 * (index + 2)}s` }}
            >
              <h3 className="text-lg font-semibold text-primary mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all"
                  >
                    {skillIcons[skill] ? (
                      skillIcons[skill]
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-primary/30" />
                    )}
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
