import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "./ui/Button";
import profilePhoto from "../assets/profile.png";

export function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const progress = Math.min(window.scrollY / (heroHeight * 0.6), 1);
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-28 sm:pt-24 lg:pt-20 pb-16">
      {/* Premium Ambient Radial Mesh Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse [animation-delay:700ms]"></div>

        {/* Subtle Background Grid Line Overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="border-r border-foreground h-full"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight font-semibold">
                <span className="block mt-5">Hello, I'm</span>
                <span className="block bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                  Muhammad Bilal Qamar
                </span>
              </h1>

              <div className="space-y-4">
                <p className="text-xl sm:text-2xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
                  Full-Stack Software Engineer building
                  <span className="text-primary font-medium">
                    {" "}
                    scalable web apps
                  </span>{" "}
                  and robust APIs
                </p>

                <p className="text-lg text-muted-foreground/80 max-w-md mx-auto lg:mx-0">
                  A passionate software engineer and 4th-semester Computer
                  Science student at Superior University, Pakistan. I specialize
                  in building scalable web applications, robust APIs, and modern
                  user interfaces.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="group relative overflow-hidden shadow-lg shadow-primary/20"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                <Download className="h-5 w-5" />
                Download Resume
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/Muhammad-Bilal-Qamar"
                target="_blank"
                rel="noreferrer"
                data-glow
                className="h-12 w-12 flex items-center justify-center rounded-full bg-background/50 backdrop-blur-md border border-primary/15 hover:bg-primary/10 hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-bilal-qamar-43608b269/"
                target="_blank"
                rel="noreferrer"
                data-glow
                className="h-12 w-12 flex items-center justify-center rounded-full bg-background/50 backdrop-blur-md border border-primary/15 hover:bg-primary/10 hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mbilalqamar786786@gmail.com"
                target="_blank"
                rel="noreferrer"
                data-glow
                className="h-12 w-12 flex items-center justify-center rounded-full bg-background/50 backdrop-blur-md border border-primary/15 hover:bg-primary/10 hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary/10">
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl mb-1 font-semibold text-foreground">
                  3+
                </div>
                <div className="text-sm text-muted-foreground">
                  Major Projects
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl mb-1 font-semibold text-foreground">
                  4th
                </div>
                <div className="text-sm text-muted-foreground">Semester CS</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl mb-1 font-semibold text-foreground">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">Dedication</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center order-1 lg:order-2 mt-8 lg:mt-0"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-gradient-to-tl from-accent/40 to-primary/20 rounded-full blur-3xl opacity-40"></div>

              <div
                aria-hidden="true"
                className="breathing-glow absolute inset-0 -m-3 rounded-full bg-gradient-to-br from-primary/50 via-primary/20 to-secondary/50 blur-2xl"
              ></div>

              <div className="relative z-10 group" data-glow>
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-md border-4 border-background/60 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <img
                    src={profilePhoto}
                    alt="Muhammad Bilal Qamar"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
