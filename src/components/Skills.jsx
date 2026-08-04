import { motion } from "framer-motion";
import { Code, Server, Database } from "lucide-react";
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

export function Skills() {
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
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the modern full-stack development
            landscape, from responsive frontends to secure, scalable backend
            APIs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-md hover:-translate-y-1 transition-all duration-300">
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
