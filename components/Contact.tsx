"use client";

import { portfolioData } from "@/lib/data";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaCopy, FaCheck } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="section-container">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up">
          <span className="gradient-text">Get In Touch</span>
        </h2>
        <p className="text-muted-foreground mb-12 animate-fade-in-up [animation-delay:0.1s]">
          I&apos;m always interested in hearing about new opportunities and
          projects
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {/* Email */}
          <div className="backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/15 dark:hover:bg-white/10 hover:border-white/30 dark:hover:border-white/20 flex items-start gap-4 animate-fade-in-up [animation-delay:0.2s]">
            <div className="flex-shrink-0 mt-1">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 text-primary">
                <FaEnvelope className="w-5 h-5" />
              </div>
            </div>
            <div className="flex-grow min-w-0">
              <p className="text-sm text-muted-foreground mb-1">Email</p>
              <p className="font-semibold break-all">{portfolioData.email}</p>
              <button
                onClick={() => copyToClipboard(portfolioData.email, "email")}
                className="text-xs text-primary hover:underline mt-2 flex items-center gap-1"
              >
                {copied === "email" ? (
                  <>
                    <FaCheck className="w-3 h-3" />
                    Copied!
                  </>
                ) : (
                  <>
                    <FaCopy className="w-3 h-3" />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Phone */}
          <div className="backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/15 dark:hover:bg-white/10 hover:border-white/30 dark:hover:border-white/20 flex items-start gap-4 animate-fade-in-up [animation-delay:0.3s]">
            <div className="flex-shrink-0 mt-1">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/20 text-accent">
                <FaPhone className="w-5 h-5" />
              </div>
            </div>
            <div className="flex-grow">
              <p className="text-sm text-muted-foreground mb-1">Phone</p>
              <p className="font-semibold">{portfolioData.phone}</p>
              <button
                onClick={() => copyToClipboard(portfolioData.phone, "phone")}
                className="text-xs text-primary hover:underline mt-2 flex items-center gap-1"
              >
                {copied === "phone" ? (
                  <>
                    <FaCheck className="w-3 h-3" />
                    Copied!
                  </>
                ) : (
                  <>
                    <FaCopy className="w-3 h-3" />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Location and Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/15 dark:hover:bg-white/10 hover:border-white/30 dark:hover:border-white/20 flex items-start gap-4 animate-fade-in-up [animation-delay:0.4s]">
            <div className="flex-shrink-0 mt-1">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/20 text-blue-500">
                <FaMapMarkerAlt className="w-5 h-5" />
              </div>
            </div>
            <div className="flex-grow">
              <p className="text-sm text-muted-foreground mb-1">Location</p>
              <p className="font-semibold">{portfolioData.location}</p>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/15 dark:hover:bg-white/10 hover:border-white/30 dark:hover:border-white/20 flex items-start gap-4 animate-fade-in-up [animation-delay:0.5s]">
            <div className="flex-shrink-0 mt-1">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gray-600/20 text-gray-600 dark:text-gray-400">
                <FaGithub className="w-5 h-5" />
              </div>
            </div>
            <div className="flex-grow">
              <p className="text-sm text-muted-foreground mb-1">GitHub</p>
              <a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary hover:underline"
              >
                @Hoangjunss
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center animate-fade-in-up [animation-delay:0.6s]">
          <p className="text-muted-foreground mb-6">
            Feel free to reach out via email or connect on GitHub
          </p>
          <a href={`mailto:${portfolioData.email}`}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <FaEnvelope className="mr-2 w-4 h-4" />
              Send Me an Email
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
