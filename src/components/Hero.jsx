import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowDown,
  Sparkles,
} from "lucide-react";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import profilePhoto1 from "../assets/profile(1).jpeg";
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-20 lg:pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-linear-to-br from-background via-background to-primary/5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-secondary/30 rounded-full blur-3xl animate-pulse [animation-delay:700ms]"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse [animation-delay:1000ms]"></div>

        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                className="border-r border-foreground/10 h-full"
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <span className="block bg-linear-to-r from-primary via-primary to-primary/70 bg-clip-text">
                  Muhammad Bilal Qamar
                </span>
              </h1>

              <div className="space-y-4">
                <p className="text-xl sm:text-2xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
                  Full-Stack Software Engineer building
                  <span className="text-primary"> scalable web apps</span> and
                  robust APIs
                </p>

                <p className="text-lg text-muted-foreground/80 max-w-md mx-auto lg:mx-0">
                  A passionate software engineer and 5th-semester Computer
                  Science student at Superior University Gold Campus, Pakistan.
                  I specialize in building scalable web applications, robust
                  APIs, and modern user interfaces.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="group relative overflow-hidden"
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
                className="h-12 w-12 flex items-center justify-center rounded-full bg-background/50 backdrop-blur-sm border border-primary/10 hover:bg-primary/10 hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-bilal-qamar-43608b269/"
                target="_blank"
                rel="noreferrer"
                data-glow
                className="h-12 w-12 flex items-center justify-center rounded-full bg-background/50 backdrop-blur-sm border border-primary/10 hover:bg-primary/10 hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=mbilalqamar786786@gmail.com"
                target="_blank"
                rel="noreferrer"
                data-glow
                className="h-12 w-12 flex items-center justify-center rounded-full bg-background/50 backdrop-blur-sm border border-primary/10 hover:bg-primary/10 hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl mb-1 font-semibold">
                  3+
                </div>
                <div className="text-sm text-muted-foreground">
                  Major Projects
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl mb-1 font-semibold">
                  5th
                </div>
                <div className="text-sm text-muted-foreground">Semester CS</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl mb-1 font-semibold">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">Dedication</div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center order-1 lg:order-2 mt-8 lg:mt-0"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-linear-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-linear-to-tl from-accent/30 to-primary/10 rounded-full blur-3xl opacity-40"></div>

              {/* Breathing glow ring behind the photo */}
              <div
                aria-hidden="true"
                className="breathing-glow absolute inset-0 -m-3 rounded-full bg-linear-to-br from-primary/50 via-primary/20 to-secondary/50 blur-2xl"
              ></div>
              <div
                aria-hidden="true"
                className="breathing-glow absolute inset-0 rounded-full ring-4 ring-primary/30 [animation-delay:0.6s]"
              ></div>

              <div className="relative z-10 group" data-glow>
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden bg-linear-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border-4 border-background/50 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <img
                    src={profilePhoto}
                    alt="Muhammad Bilal Qamar"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-primary/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
