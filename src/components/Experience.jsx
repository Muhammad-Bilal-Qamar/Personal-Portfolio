import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Code2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/Card";
import { Badge } from "./ui/Badge";

const experiences = [
  {
    role: "Summer Intern",
    organization: "Glosix Systems",
    period: "Internship",
    location: "Pakistan",
    type: "Engineering",
    description:
      "Engineered responsive frontends and integrated robust backend APIs. Collaborated with senior developers to build scalable modules, optimize database queries, and implement secure authentication mechanisms.",
    skills: [
      "React",
      "Tailwind CSS",
      "C#",
      ".NET / ASP.NET Core",
      "SQL Server",
      "Git",
    ],
  },
  {
    role: "Campus Ambassador",
    organization: "Softec",
    period: "Present",
    location: "Campus Role",
    type: "Leadership & Community",
    description:
      "Serving as the active Softec Campus Ambassador, driving tech event outreach, promoting developer competitions, and fostering community engagement among student developers across campus.",
    skills: [
      "Community Outreach",
      "Event Promotion",
      "Leadership",
      "Networking",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4 overflow-hidden">
      {/* Sleek Glowing Divider Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"></div>

      {/* Floating Ambient Mesh Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[140px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Work & Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            My professional internships, developer roles, and active campus
            leadership positions.
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.role}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="border border-primary/10 bg-card/60 backdrop-blur-sm hover:border-primary/30 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary">
                        <Briefcase className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-semibold">
                          {exp.role}
                        </CardTitle>
                        <p className="text-primary font-medium text-sm">
                          {exp.organization}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1 bg-secondary/50 px-3 py-1 rounded-full border border-primary/10">
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.period}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs"
                      >
                        {skill}
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
