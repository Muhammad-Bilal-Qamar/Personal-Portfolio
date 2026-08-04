import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/Card";
import { Button } from "./ui/Button";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setError("");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSent(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSent(false), 3000);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setError("Something went wrong. Please try again or email me directly.");
      })
      .finally(() => setSending(false));
  };

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
          <h2 className="text-3xl md:text-4xl font-semibold">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind, an job opportunity, or just want to connect?
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">
                      mbilalqamar786786@gmail.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-muted-foreground">+92 329 3313330</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">Lahore, Pakistan</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/Muhammad-Bilal-Qamar"
                target="_blank"
                rel="noreferrer"
                className="h-11 w-11 flex items-center justify-center rounded-full border border-border hover:bg-accent transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-bilal-qamar-43608b269/"
                target="_blank"
                rel="noreferrer"
                className="h-11 w-11 flex items-center justify-center rounded-full border border-border hover:bg-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="h-10 w-full rounded-lg border border-border bg-secondary/30 px-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    />
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      className="h-10 w-full rounded-lg border border-border bg-secondary/30 px-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                    />
                  </div>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="h-10 w-full rounded-lg border border-border bg-secondary/30 px-3 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                  />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={5}
                    required
                    className="w-full rounded-lg border border-border bg-secondary/30 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                  />
                  {error && (
                    <p className="text-sm text-red-500">{error}</p>
                  )}
                  <Button className="w-full" type="submit" disabled={sending}>
                    <Send className="h-4 w-4" />
                    {sending ? "Sending..." : sent ? "Message Sent!" : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
