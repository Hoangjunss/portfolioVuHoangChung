"use client";

import { portfolioData } from "@/lib/data";
import { BiBook } from "react-icons/bi";

export default function Education() {
  const edu = portfolioData.education;

  return (
    <section id="education" className="section-container">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up">
          <span className="gradient-text">Education</span>
        </h2>
        <p className="text-muted-foreground mb-12 animate-fade-in-up [animation-delay:0.1s]">
          My academic background and foundational knowledge
        </p>

        <div className="glass-card animate-fade-in-up flex gap-4">
          <div className="flex-shrink-0 mt-1">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/20 text-accent">
              <BiBook className="w-6 h-6" />
            </div>
          </div>

          <div className="flex-grow">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
              <div>
                <h3 className="text-xl font-bold">{edu.school}</h3>
                <p className="text-primary font-semibold">{edu.degree}</p>
              </div>
              <div className="text-sm text-muted-foreground mt-2 sm:mt-0 text-right">
                <p>
                  {edu.startDate} — {edu.expectedGraduation ? "Expected" : ""}{" "}
                  {edu.endDate}
                </p>
                <p className="text-xs">{edu.location}</p>
              </div>
            </div>

            {/* GPA and Details */}
            <div className="space-y-3 mt-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">GPA</span>
                <span className="font-semibold text-primary">{edu.gpa}</span>
              </div>

              <div>
                <p className="text-xs font-semibold text-muted-foreground mb-2">
                  Core Coursework
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {edu.coursework}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
