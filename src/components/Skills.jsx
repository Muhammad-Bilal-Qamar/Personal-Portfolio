import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Server, Database, Cloud, BrainCircuit } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/Card";
import { Badge } from "./ui/Badge";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend",
    skills: [
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Bootstrap",
      "HTML5 / CSS3",
      "jQuery",
    ],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    skills: [
      "C#",
      ".NET / ASP.NET Core Web API (ASP.NET 9)",
      "Python",
      "PHP",
      "C++",
      "SignalR",
      "JWT Authentication",
    ],
  },
  {
    icon: Database,
    title: "Database",
    skills: ["SQL Server", "Entity Framework Core", "MySQL", "LINQ"],
  },
  {
    icon: BrainCircuit,
    title: "AI / ML",
    skills: [
      "LangGraph",
      "LangChain",
      "Retrieval-Augmented Generation (RAG)",
      "Groq LLM API",
      "HuggingFace",
      "Multi-Agent Systems",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: [
      "Cloudflare R2 (Object Storage)",
      "AWS S3",
      "Vercel",
      "Render",
      "GitHub Actions",
      "Git / GitHub",
    ],
  },
];

const extendedCategories = [...skillCategories, ...skillCategories];

export function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleAnimationComplete = () => {
    if (currentIndex >= skillCategories.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    }
  }, [isTransitioning]);

  const getTranslateX = () => {
    if (cardsPerView === 1) {
      return `calc(-${currentIndex} * (100% + 1.5rem))`;
    }
    if (cardsPerView === 2) {
      return `calc(-${currentIndex} * (50% + 0.75rem))`;
    }
    return `calc(-${currentIndex} * (33.333% + 0.5rem))`;
  };

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Sleek Glowing Divider Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"></div>

      {/* Floating Ambient Mesh Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/5 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Comprehensive expertise across the modern full-stack development
            landscape, from responsive frontends to secure, scalable backend
            APIs.
          </p>
        </motion.div>

        {/* Carousel Viewport */}
        <div
          className="w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            className="flex gap-6"
            animate={{
              x: getTranslateX(),
            }}
            transition={
              isTransitioning
                ? { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
                : { duration: 0 }
            }
            onAnimationComplete={handleAnimationComplete}
          >
            {extendedCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={`${category.title}-${index}`}
                  className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] flex-shrink-0"
                >
                  <Card className="h-full border border-primary/10 bg-card/60 backdrop-blur-sm hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
