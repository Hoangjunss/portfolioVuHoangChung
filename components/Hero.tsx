"use client";

import { portfolioData } from "@/lib/data";
import { FaDownload, FaEnvelope, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => observer.observe(el));
    return () => reveals.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background animated blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl -z-10" />

      <div className="section-container flex flex-col items-center justify-center text-center">
        <div className="mb-8 reveal">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 mb-6 mx-auto shadow-xl">
            <div className="w-full h-full rounded-full bg-background dark:bg-card flex items-center justify-center">
              <span className="text-5xl sm:text-6xl font-bold animated-gradient-text">
                VH
              </span>
            </div>
          </div>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 reveal">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient-shift_6s_linear_infinite]">
            {portfolioData.name}
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-primary font-semibold mb-4 reveal">
          {portfolioData.title}
        </p>

        <p className="max-w-2xl text-base sm:text-lg text-muted-foreground mb-8 reveal">
          {portfolioData.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 reveal mb-12">
          <a href="#projects">
            <Button
              size="lg"
              className="btn-primary rounded-full px-8 py-6 text-base"
            >
              View My Work
            </Button>
          </a>
          <a href={`mailto:${portfolioData.email}`}>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all px-8 py-6 text-base"
            >
              <FaEnvelope className="mr-2" />
              Get In Touch
            </Button>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center reveal">
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-3 rounded-full hover:scale-110 transition-transform"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${portfolioData.email}`}
            className="glass-card p-3 rounded-full hover:scale-110 transition-transform"
          >
            <FaEnvelope className="w-5 h-5" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <p className="text-xs text-muted-foreground">Scroll down</p>
        </div>
      </div>
    </section>
  );
}