"use client";

import { portfolioData } from "@/lib/data";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaCopy, FaCheck } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

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
  }, []);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="section-container">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 reveal animated-gradient-text">
          Get In Touch
        </h2>
        <p className="text-muted-foreground mb-12 reveal">
          I&apos;m always interested in hearing about new opportunities and projects
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="glass-card p-6 reveal flex items-start gap-4">
            <div className="p-3 rounded-xl bg-primary/20 text-primary">
              <FaEnvelope className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-semibold break-all">{portfolioData.email}</p>
              <button
                onClick={() => copyToClipboard(portfolioData.email, "email")}
                className="text-xs text-primary hover:underline mt-2 flex items-center gap-1"
              >
                {copied === "email" ? <><FaCheck /> Copied!</> : <><FaCopy /> Copy</>}
              </button>
            </div>
          </div>

          <div className="glass-card p-6 reveal flex items-start gap-4">
            <div className="p-3 rounded-xl bg-accent/20 text-accent">
              <FaPhone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="font-semibold">{portfolioData.phone}</p>
              <button
                onClick={() => copyToClipboard(portfolioData.phone, "phone")}
                className="text-xs text-primary hover:underline mt-2 flex items-center gap-1"
              >
                {copied === "phone" ? <><FaCheck /> Copied!</> : <><FaCopy /> Copy</>}
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6 reveal flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-500/20 text-blue-500">
              <FaMapMarkerAlt className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p className="font-semibold">{portfolioData.location}</p>
            </div>
          </div>
          <div className="glass-card p-6 reveal flex items-start gap-4">
            <div className="p-3 rounded-xl bg-gray-600/20 text-gray-600 dark:text-gray-400">
              <FaGithub className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">GitHub</p>
              <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline">
                @Hoangjunss
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center reveal">
          <a href={`mailto:${portfolioData.email}`}>
            <Button className="btn-primary rounded-full px-8 py-6 text-base">
              <FaEnvelope className="mr-2" />
              Send Me an Email
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}