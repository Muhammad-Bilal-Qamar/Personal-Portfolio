import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/Card";
import { Badge } from "./ui/Badge";

const projects = [
  {
    title: "ShopCoAPI",
    description:
      "Backend e-commerce API built with ASP.NET 9, JWT Auth, SignalR real-time hubs, and Cloudflare R2 storage.",
    tags: ["ASP.NET 9", "C#", "JWT", "SignalR", "Cloudflare R2", "SQL Server"],
    github: "https://github.com/Muhammad-Bilal-Qamar",
  },
  {
    title: "FinTrack & FinTrack Business",
    description:
      "Personal finance tracker expanded into a multi-tenant business bookkeeping platform with React, Tailwind, and SQL Server.",
    tags: ["React", "Tailwind CSS", "C#", ".NET", "SQL Server"],
    github: "https://github.com/Muhammad-Bilal-Qamar",
  },
  {
    title: "Google Apps Script Email Automation Pipeline",
    description:
      "Rule-based information extraction and redaction pipeline processing emails with a React dashboard interface.",
    tags: ["React", "Google Apps Script", "JavaScript", "Automation"],
    github: "https://github.com/Muhammad-Bilal-Qamar",
  },
];

export function Projects() {
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
            A showcase of full-stack web applications, APIs, and automated
            systems I've engineered.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
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
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
