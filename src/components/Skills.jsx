import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Server, Database, Cloud } from "lucide-react";
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
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: [
      "Cloudflare R2 (Object Storage)",
      "AWS S3",
      "Vercel",
      "GitHub Actions",
      "Git / GitHub",
    ],
  },
];

// Duplicate list so index transitions smoothly across boundaries
const extendedCategories = [...skillCategories, ...skillCategories];

export function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(1);

  // Dynamically track active screen width to adjust movement offset
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

  // Auto-scroll loop (pauses on mouse hover)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Handle seamless loop reset when reaching the end of the original array length
  const handleAnimationComplete = () => {
    if (currentIndex >= skillCategories.length) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  };

  // Re-enable smooth transition after instant position reset
  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    }
  }, [isTransitioning]);

  // Dynamic X translation matrix based on active viewport card counts
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
    <section className="py-20 px-4 bg-secondary/20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
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
                  <Card className="h-full hover:shadow-md transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-primary" />
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
