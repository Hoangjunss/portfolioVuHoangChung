"use client";

import { portfolioData } from "@/lib/data";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Projects() {
  const [carouselIndices, setCarouselIndices] = useState<Record<number, number>>({});

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

  const getCarouselIndex = (projectIndex: number) => carouselIndices[projectIndex] || 0;

  const moveCarousel = (projectIndex: number, direction: "next" | "prev") => {
    const currentIndex = getCarouselIndex(projectIndex);
    const imagesLength = portfolioData.projects[projectIndex].images.length || 0;
    let newIndex = currentIndex;
    if (direction === "next") newIndex = (currentIndex + 1) % imagesLength;
    else newIndex = (currentIndex - 1 + imagesLength) % imagesLength;
    setCarouselIndices({ ...carouselIndices, [projectIndex]: newIndex });
  };

  return (
    <section id="projects" className="section-container">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 reveal animated-gradient-text">
          Featured Projects
        </h2>
        <p className="text-muted-foreground mb-12 reveal">
          A selection of projects that showcase my backend development expertise
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => {
            const currentImageIndex = getCarouselIndex(index);
            const currentImage = project.images[currentImageIndex];

            return (
              <div
                key={index}
                className="glass-card group overflow-hidden reveal flex flex-col h-full"
              >
                {/* Image Carousel */}
                <div className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden mb-4">
                  {currentImage && (
                    <Image
                      src={currentImage.url}
                      alt={currentImage.caption}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={() => moveCarousel(index, "prev")}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all z-10 backdrop-blur-sm"
                      >
                        <FaChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => moveCarousel(index, "next")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-all z-10 backdrop-blur-sm"
                      >
                        <FaChevronRight className="w-4 h-4" />
                      </button>
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {project.images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setCarouselIndices({ ...carouselIndices, [index]: i })}
                            className={`w-1.5 h-1.5 rounded-full transition-all ${
                              i === currentImageIndex ? "bg-white w-4" : "bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <p className="text-xs text-muted-foreground mb-3">{currentImage?.caption}</p>

                <h3 className="text-xl sm:text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-muted-foreground mb-2">Key Highlights</p>
                  <ul className="text-sm space-y-1.5 text-muted-foreground">
                    {project.highlights.slice(0, 2).map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1 text-xs">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-primary/50 text-primary hover:bg-primary/10 transition-all"
                  >
                    <FaGithub className="mr-2" />
                    View on GitHub
                  </Button>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}