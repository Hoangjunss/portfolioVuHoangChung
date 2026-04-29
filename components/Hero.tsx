"use client";

import { portfolioData } from "@/lib/data";
import { FaDownload, FaEnvelope, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 -z-10"></div>

      <div className="section-container flex flex-col items-center justify-center text-center">
        <div className="mb-8 animate-fade-in-up">
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-primary to-accent p-1 mb-8 mx-auto">
            <div className="w-full h-full rounded-full bg-background dark:bg-card flex items-center justify-center">
              <span className="text-4xl sm:text-5xl font-bold gradient-text">VH</span>
            </div>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up [animation-delay:0.1s]">
          <span className="text-foreground">{portfolioData.name}</span>
        </h1>

        <p className="text-xl sm:text-2xl text-primary font-semibold mb-4 animate-fade-in-up [animation-delay:0.2s]">
          {portfolioData.title}
        </p>

        <p className="max-w-2xl text-base sm:text-lg text-muted-foreground mb-8 animate-fade-in-up [animation-delay:0.3s]">
          {portfolioData.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:0.4s] mb-12">
          <a
            href="#projects"
            className="inline-flex items-center justify-center"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              View My Work
            </Button>
          </a>
          <a href={`mailto:${portfolioData.email}`}>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              <FaEnvelope className="mr-2 w-4 h-4" />
              Get In Touch
            </Button>
          </a>
        </div>

        {/* Contact Links */}
        <div className="flex gap-4 justify-center animate-fade-in-up [animation-delay:0.5s]">
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 p-3 rounded-full hover:bg-white/20 dark:hover:bg-white/15 transition-all"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${portfolioData.email}`}
            className="backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 p-3 rounded-full hover:bg-white/20 dark:hover:bg-white/15 transition-all"
            aria-label="Email"
          >
            <FaEnvelope className="w-5 h-5" />
          </a>
          <a
            href={`tel:${portfolioData.phone}`}
            className="backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 p-3 rounded-full hover:bg-white/20 dark:hover:bg-white/15 transition-all"
            aria-label="Phone"
          >
            <span className="text-sm font-semibold">+84</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-glow">
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs text-muted-foreground">Scroll to explore</p>
            <svg
              className="w-6 h-6 text-primary animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
