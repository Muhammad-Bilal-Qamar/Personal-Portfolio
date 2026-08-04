import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Award } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/Card";
import { Badge } from "./ui/Badge";

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Currently preparing & adapting business logic for real-world scenarios",
    location: "Lahore, Pakistan",
    period: "In Progress",
    icon: Briefcase,
    description:
      "Actively preparing for and adapting business logic to real-world software engineering scenarios, translating academic full-stack skills into production-ready practice through hands-on project work.",
    technologies: ["React", ".NET / ASP.NET Core", "SQL Server", "JWT Auth"],
  },
  {
    title: "Softec Campus Ambassador",
    company: "Superior University",
    location: "Lahore, Pakistan",
    period: "Ongoing",
    icon: Award,
    description:
      "Represented Superior University as a Softec Campus Ambassador, promoting the university's flagship tech event and coordinating outreach. Awarded a Certificate of Appreciation by the university dean for outstanding service.",
    technologies: ["Leadership", "Event Coordination", "Community Building"],
  },
];

export function Experience() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold">Experience & Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building real-world experience alongside my Computer Science studies,
            balancing hands-on engineering work with campus leadership.
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="hover:shadow-md transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <Icon className="h-5 w-5 text-primary" />
                          {exp.title}
                        </CardTitle>
                        <p className="text-primary mt-1">{exp.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end gap-1">
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
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
