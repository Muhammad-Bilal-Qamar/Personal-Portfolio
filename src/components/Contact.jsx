import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/Button";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      {/* Sleek Glowing Divider Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"></div>

      {/* Floating Ambient Mesh Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-primary/10 rounded-full blur-[150px] opacity-50"></div>
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
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Have a project in mind, an opportunity, or just want to connect?
            Feel free to drop me a message!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center gap-4 p-4 rounded-xl border border-primary/10 bg-card/60 backdrop-blur-sm">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="text-sm font-medium">
                  mbilalqamar786786@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl border border-primary/10 bg-card/60 backdrop-blur-sm">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Location</p>
                <p className="text-sm font-medium">Lahore, Pakistan</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 p-6 md:p-8 rounded-2xl border border-primary/10 bg-card/60 backdrop-blur-sm shadow-xl">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-primary/15 focus:border-primary focus:outline-hidden transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-background/50 border border-primary/15 focus:border-primary focus:outline-hidden transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg bg-background/50 border border-primary/15 focus:border-primary focus:outline-hidden transition-colors"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg bg-background/50 border border-primary/15 focus:border-primary focus:outline-hidden transition-colors resize-none"
              ></textarea>
              <Button
                size="lg"
                className="w-full gap-2 shadow-lg shadow-primary/20"
              >
                <Send className="h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
