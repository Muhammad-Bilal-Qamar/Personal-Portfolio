import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  ShoppingCart,
  Wallet,
  Building2,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/Card";
import { Badge } from "./ui/Badge";

const projects = [
  {
    title: "ShopCo",
    icon: ShoppingCart,
    description:
      "A full-stack e-commerce platform. Features protected routes, a robust API architecture using Data Transfer Objects (DTOs), JWT authentication, and a real-time live support chat hub.",
    technologies: [
      "React",
      "Tailwind CSS",
      "ASP.NET 9 Web API",
      "SignalR",
      "SQL Server",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "FinTrack",
    icon: Wallet,
    description:
      "A responsive personal finance web application featuring dynamic dashboards and data aggregation routines to help users track their finances efficiently.",
    technologies: ["React", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Smart City Assistant Platform",
    icon: Building2,
    description:
      "A comprehensive software engineering documentation project detailing complex system architectures, module breakdowns, and platform design.",
    technologies: ["System Architecture", "Technical Documentation", "UML"],
    github: "#",
    demo: "#",
  },
];

export function Projects() {
  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that demonstrate my expertise in full-stack
            development, secure API design, and real-time systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="aspect-video bg-linear-to-br from-primary/10 to-secondary/30 flex items-center justify-center">
                    <Icon className="h-16 w-16 text-primary/60" />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 flex flex-col flex-1">
                    <p className="text-muted-foreground flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2 pt-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 h-9 px-3 text-sm border border-primary/20 bg-background/50 backdrop-blur-sm text-foreground hover:bg-primary/10"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 h-9 px-3 text-sm bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
