import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Folder, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/Card";
import { Badge } from "./ui/Badge";

const projects = [
  {
    title: "Invoice Generator — AI-Powered Invoice Platform",
    description:
      "A client-side AI agent developed to automate billing workflows. It features a responsive glassmorphic UI built entirely with vanilla HTML, CSS, and JavaScript. The application directly integrates the Groq API—utilizing models like GPT-OSS 120B to automatically parse unstructured client briefs into structured line items. Core capabilities include a live multi-page rendering canvas, HTML5 canvas for digital signatures, an AI-powered client email drafter, native PDF export via the browser's Print API, and robust local storage state management",
    tags: [
      "Vanilla JavaScript",
      "HTML5 & CSS3",
      "Groq API",
      "Qwen Models",
      "AI Agent",
      "Glassmorphism",
      "Local Storage",
    ],
    github: "https://github.com/Muhammad-Bilal-Qamar",
    demo: "https://invoice-generator-eta-three-88.vercel.app/",
  },
  {
    title: "ShopCo — E-Commerce Store",
    description:
      "Full-stack e-commerce platform with a React 19 + Tailwind CSS storefront and a .NET / ASP.NET Core Web API backend. JWT auth with role-based authorization, an admin dashboard, Cloudflare R2 image storage, real-time support chat via SignalR, and an AI shopping assistant powered by the Groq LLM API.",
    tags: [
      "React",
      "Tailwind CSS",
      "ASP.NET Core",
      "C#",
      "JWT",
      "SignalR",
      "Cloudflare R2",
      "Groq LLM",
    ],
    github: "https://github.com/Muhammad-Bilal-Qamar",
    demo: "https://shop-co-frontend-nu.vercel.app/",
  },
  {
    title: "RAG PDF Analyzer — Chat with your PDFs",
    description:
      "Full-stack RAG (Retrieval-Augmented Generation) platform built with FastAPI, React, and Supabase that lets users upload PDFs and query them through an AI chat interface with source-page citations. Includes a document-processing pipeline with LangChain text splitters, batched HuggingFace embeddings, and Groq LLM inference secured with JWT auth.",
    tags: [
      "FastAPI",
      "React",
      "Supabase",
      "LangChain",
      "HuggingFace",
      "Groq",
      "RAG",
    ],
    github: "https://github.com/Muhammad-Bilal-Qamar",
    demo: "https://rag-analyzer-frontend.vercel.app/",
  },
  {
    title: "Omnimedia — Writes your blog",
    description:
      "AI-powered blog content generation pipeline built with LangGraph, FastAPI, and React using a multi-agent architecture (researcher, SEO, writer, editor). Parallel fan-out/fan-in agent execution, a human-in-the-loop approval and revision workflow, and MemGPT-style tiered memory to keep long revision chains bounded.",
    tags: ["LangGraph", "FastAPI", "React", "Multi-Agent", "Groq"],
    github: "https://github.com/Muhammad-Bilal-Qamar",
    demo: "https://omnimedia-frontend.vercel.app/",
  },
  {
    title: "voyagecraft — Plan your trip",
    description:
      "Multi-agent trip-planning app using LangGraph orchestration and Groq's Llama 3.3 70B model, coordinating discovery, itinerary, and budget agents through a FastAPI backend and React frontend. Features a real-time disruption-simulation engine that dynamically re-plans itineraries in response to live events.",
    tags: ["LangGraph", "Groq", "FastAPI", "React", "Multi-Agent"],
    github: "https://github.com/Muhammad-Bilal-Qamar",
    demo: "https://voyage-craft-frontend.vercel.app/",
  },
  {
    title: "Fintrack — Personal Finance Web App",
    description:
      "Full-stack personal finance tracker currently under development, built with React, Tailwind CSS, and a .NET / SQL Server backend.",
    tags: ["React", "Tailwind CSS", "C#", ".NET", "SQL Server"],
    github: "https://github.com/Muhammad-Bilal-Qamar",
  },
  {
    title: "C++ OOP Projects",
    description:
      "A collection of object-oriented C++ systems: a multi-account Bank Management System, a Vehicle Management fleet-tracking app, and a rule-based Taxation System.",
    tags: ["C++", "OOP", "Systems Design"],
    github: "https://github.com/Muhammad-Bilal-Qamar",
  },
];

const extendedProjects = [...projects, ...projects];

export function Projects() {
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
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleAnimationComplete = () => {
    if (currentIndex >= projects.length) {
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
    <section id="projects" className="relative py-24 px-4 overflow-hidden">
      {/* Sleek Glowing Divider Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"></div>

      {/* Floating Ambient Mesh Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-10 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[130px]"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
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
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            A showcase of full-stack web applications, AI agent systems, and
            APIs I've engineered.
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
            {extendedProjects.map((project, index) => (
              <div
                key={`${project.title}-${index}`}
                className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] flex-shrink-0"
              >
                <Card className="h-full flex flex-col justify-between border border-primary/10 bg-card/60 backdrop-blur-sm hover:border-primary/30 hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Folder className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                    <CardTitle className="text-xl font-semibold">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 px-4 py-2 text-sm font-medium transition-colors duration-300"
                        >
                          <ExternalLink className="h-4 w-5" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
