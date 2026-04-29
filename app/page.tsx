import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function Home() {
  return (
    <main className="min-h-screen">
      <DarkModeToggle />
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />

      {/* Footer */}
      <footer className="bg-card/50 backdrop-blur-xl border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-muted-foreground">
            © 2026 Vũ Hoàng Chung. Built with React and Next.js.
          </p>
        </div>
      </footer>
    </main>
  );
}
