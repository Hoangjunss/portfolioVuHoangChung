"use client";

import { portfolioData } from "@/lib/data";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Projects() {
  const [carouselIndices, setCarouselIndices] = useState<Record<number, number>>(
    {}
  );

  const getCarouselIndex = (projectIndex: number) => {
    return carouselIndices[projectIndex] || 0;
  };

  const moveCarousel = (projectIndex: number, direction: "next" | "prev") => {
    const currentIndex = getCarouselIndex(projectIndex);
    const imagesLength =
      portfolioData.projects[projectIndex].images.length || 0;
    let newIndex = currentIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % imagesLength;
    } else {
      newIndex = (currentIndex - 1 + imagesLength) % imagesLength;
    }

    setCarouselIndices({
      ...carouselIndices,
      [projectIndex]: newIndex,
    });
  };

  return (
    <section id="projects" className="section-container">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        <p className="text-muted-foreground mb-12 animate-fade-in-up [animation-delay:0.1s]">
          A selection of projects that showcase my backend development expertise
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => {
            const currentImageIndex = getCarouselIndex(index);
            const currentImage = project.images[currentImageIndex];

            return (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/15 dark:hover:bg-white/10 hover:border-white/30 dark:hover:border-white/20 flex flex-col h-full animate-fade-in-up dark:p-8"
                style={{ animationDelay: `${0.1 * (index + 2)}s` }}
              >
                {/* Image Carousel */}
                <div className="relative w-full h-64 sm:h-72 rounded-lg overflow-hidden mb-4 bg-muted/30">
                  {currentImage && (
                    <Image
                      src={currentImage.url}
                      alt={currentImage.caption}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}

                  {/* Carousel Controls */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={() => moveCarousel(index, "prev")}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                        aria-label="Previous image"
                      >
                        <FaChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => moveCarousel(index, "next")}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                        aria-label="Next image"
                      >
                        <FaChevronRight className="w-5 h-5" />
                      </button>

                      {/* Carousel Indicators */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {project.images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() =>
                              setCarouselIndices({
                                ...carouselIndices,
                                [index]: i,
                              })
                            }
                            className={`w-2 h-2 rounded-full transition-all ${
                              i === currentImageIndex
                                ? "bg-white w-6"
                                : "bg-white/50"
                            }`}
                            aria-label={`Image ${i + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Image Caption */}
                <p className="text-sm text-muted-foreground mb-4">
                  {currentImage?.caption}
                </p>

                {/* Project Info */}
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-muted-foreground mb-2">
                    Key Highlights
                  </p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    {project.highlights.slice(0, 2).map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* GitHub Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary/10"
                  >
                    <FaGithub className="mr-2 w-4 h-4" />
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
