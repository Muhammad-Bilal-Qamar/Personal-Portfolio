import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Button } from "./components/ui/Button";
import { CursorGlow } from "./components/CursorGlow";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", darkMode);
    root.style.colorScheme = darkMode ? "dark" : "light";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <CursorGlow />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/60 supports-backdrop-blur:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="shrink-0">
              <h3 className="tracking-tight font-semibold">Muhammad Bilal Qamar</h3>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    data-glow
                    className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm rounded-md transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode((d) => !d)}
                data-glow
                aria-label="Toggle theme"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            </div>

            {/* Mobile menu section */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode((d) => !d)}
                data-glow
                aria-label="Toggle theme"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen((o) => !o)}
                data-glow
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground block px-3 py-2 text-base transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary/20 py-12 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="mb-4 font-semibold">Bilal Qamar</h3>
          <p className="text-muted-foreground mb-6">
            Full-Stack Software Engineer | BSCS Student @ Superior University
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bilal Qamar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
