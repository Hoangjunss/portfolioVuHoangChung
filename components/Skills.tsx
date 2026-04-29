"use client";

import { portfolioData } from "@/lib/data";
import {
  SiSpringboot,
  SiPostgresql,
  SiDocker,
  SiJunit5,
  SiReact,
  SiTailwindcss,
  SiRedis,
  SiMysql,
  SiRedux,
  SiBootstrap,
  SiSpringsecurity,
  SiJsonwebtokens,
} from "react-icons/si";
import { FaJava, FaGitAlt, FaJs, FaDatabase } from "react-icons/fa";
import { TbBrandTypescript, TbBrandWebsocket } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { BiLogoSpringBoot } from "react-icons/bi";
import { useEffect } from "react";

const skillIcons: Record<string, React.ReactNode> = {
  "Java (Core)": <FaJava className="w-6 h-6 text-orange-600" />,
  Java: <FaJava className="w-6 h-6 text-orange-600" />,
  SQL: <GrMysql className="w-6 h-6 text-blue-600" />,
  JavaScript: <FaJs className="w-6 h-6 text-yellow-500" />,
  TypeScript: <TbBrandTypescript className="w-6 h-6 text-blue-600" />,
  "HTML/CSS": <FaJava className="w-6 h-6 text-orange-600" />, // fallback
  "Spring Boot": <SiSpringboot className="w-6 h-6 text-green-600" />,
  "Spring MVC": <SiSpringboot className="w-6 h-6 text-green-600" />,
  "Spring Data JPA": <SiSpringboot className="w-6 h-6 text-green-600" />,
  "Spring Security": <SiSpringsecurity className="w-6 h-6 text-green-600" />,
  JWT: <SiJsonwebtokens className="w-6 h-6 text-purple-600" />,
  WebSocket: <TbBrandWebsocket className="w-6 h-6 text-blue-500" />,
  "JUnit 5": <SiJunit5 className="w-6 h-6 text-green-700" />,
  Mockito: <SiJunit5 className="w-6 h-6 text-green-700" />, // tạm dùng chung
  ReactJS: <SiReact className="w-6 h-6 text-cyan-500" />,
  "Redux Toolkit": <SiRedux className="w-6 h-6 text-purple-600" />,
  "Tailwind CSS": <SiTailwindcss className="w-6 h-6 text-teal-500" />,
  Bootstrap: <SiBootstrap className="w-6 h-6 text-purple-600" />,
  MySQL: <SiMysql className="w-6 h-6 text-blue-500" />,
  Redis: <SiRedis className="w-6 h-6 text-red-600" />,
  Docker: <SiDocker className="w-6 h-6 text-blue-400" />,
  Git: <FaGitAlt className="w-6 h-6 text-orange-600" />,
  Maven: <FaJava className="w-6 h-6 text-red-600" />,
  Postman: <FaJava className="w-6 h-6 text-orange-600" />,
  Swagger: <FaJava className="w-6 h-6 text-green-600" />,
  "SVN awareness": <FaGitAlt className="w-6 h-6 text-blue-600" />,
  "SOLID Principles": <FaJava className="w-6 h-6 text-gray-600" />,
  "Design Patterns": <FaJava className="w-6 h-6 text-gray-600" />,
  "Microservices Architecture": <FaJava className="w-6 h-6 text-gray-600" />,
};

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
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 reveal animated-gradient-text">
          Technical Skills
        </h2>
        <p className="text-muted-foreground mb-12 reveal">
          Technologies and tools I work with to build scalable backend systems
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.skills.map((skillGroup, index) => (
            <div key={index} className="glass-card p-6 reveal">
              <h3 className="text-lg font-semibold text-primary mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/20 dark:bg-white/5 border border-white/30 dark:border-white/10 hover:bg-white/30 dark:hover:bg-white/20 transition-all hover:scale-105"
                  >
                    {skillIcons[skill] || <div className="w-6 h-6 rounded-full bg-primary/30" />}
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