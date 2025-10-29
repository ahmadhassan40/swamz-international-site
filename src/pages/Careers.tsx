import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Mail, MapPin, Rocket, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const openings = [
  {
    id: "app-engineer",
    title: "Application Engineer - Engine Machinery",
    location: "Dubai, UAE",
    type: "Full-time",
    description:
      "Provide technical consultation, commissioning support, and training for engine machining and diagnostic equipment across the Middle East region.",
    tags: ["Mechanical Engineering", "Field Travel", "Customer Training"],
  },
  {
    id: "ppe-specialist",
    title: "PPE Product Specialist",
    location: "Hamburg, Germany",
    type: "Full-time",
    description:
      "Own the lifecycle of protective textile products, coordinate compliance testing, and support enterprise bids with technical documentation.",
    tags: ["PPE", "Regulatory", "Product Management"],
  },
  {
    id: "supply-chain-manager",
    title: "Global Supply Chain Manager",
    location: "Shanghai, China",
    type: "Full-time",
    description:
      "Lead vendor development, strategic sourcing, and bonded warehouse programs to support global fulfilment.",
    tags: ["Logistics", "Vendor Management", "Continuous Improvement"],
  },
];

const perks = [
  "Hybrid work model with regional travel opportunities",
  "Annual certification budget for professional development",
  "Private medical coverage and wellness allowance",
  "Performance bonuses linked to project outcomes",
];

const Careers = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(217,119,6,0.15),transparent_60%),_linear-gradient(180deg,rgba(255,252,243,1)_0%,rgba(250,244,230,1)_60%,rgba(255,255,255,1)_100%)] pt-24 pb-36">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-32 -right-24 h-[32rem] w-[32rem] rounded-full blur-3xl opacity-60 bg-[radial-gradient(circle_at_center,rgba(146,64,14,0.55),transparent_60%)] animate-[pulse-glow_18s_ease-in-out_infinite]"
          />
          <div
            className="absolute -bottom-40 -left-24 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-50 bg-[radial-gradient(circle_at_center,rgba(253,186,116,0.45),transparent_60%)] animate-[pulse-glow_20s_ease-in-out_infinite]"
            style={{ animationDelay: "1.4s" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0)_0%,rgba(217,119,6,0.12)_48%,rgba(250,204,21,0.12)_100%)]" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Badge className="mb-4 mx-auto bg-primary/12 text-primary border-primary/20">Careers at SWAMZ</Badge>
            <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Build the future of industrial safety and performance
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground">
              Join a global team of engineers, product specialists, and supply chain experts solving critical challenges for heavy industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_center,_rgba(217,119,6,0.08),transparent_60%),_linear-gradient(180deg,rgba(255,252,243,1)_0%,rgba(250,242,229,1)_100%)] py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(217,119,6,0.12)_0%,rgba(250,204,21,0.1)_100%)] opacity-55" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-6">
              {openings.map((role, index) => (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <Card className="h-full overflow-hidden border border-primary/20 bg-white/92 backdrop-blur-xl shadow-[0_28px_60px_-45px_rgba(146,64,14,0.5)]">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="font-heading text-2xl font-semibold text-foreground">{role.title}</h3>
                        <Badge variant="outline" className="border-primary/30 text-foreground/80">
                          {role.type}
                        </Badge>
                      </div>
                      <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {role.location}
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground/90">{role.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {role.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs border-primary/30 text-foreground/80">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="border-t border-primary/15 bg-white/80 p-6">
                      <Button
                        variant="outline"
                        className="w-full border-primary/30 bg-white text-black hover:bg-primary/10 hover:text-black"
                      >
                        Apply via email
                        <Mail className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="overflow-hidden border border-primary/20 bg-white/90 backdrop-blur-xl shadow-[0_30px_70px_-45px_rgba(146,64,14,0.55)]">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3">
                    <Rocket className="h-6 w-6 text-primary" />
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      Why you will love SWAMZ
                    </h3>
                  </div>
                  <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                    {perks.map((perk) => (
                      <li key={perk}>- {perk}</li>
                    ))}
                  </ul>
                  <div className="mt-8 rounded-lg border border-primary/30 bg-white/85 p-4 text-sm text-muted-foreground">
                    Can't find a role that fits? Send your resume to <span className="text-primary">talent@swamz-international.com</span> and we'll get in touch when something opens up.
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue/90 to-teal" />
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-24 left-1/3 h-60 w-60 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35),transparent_60%)] blur-3xl opacity-60 animate-[pulse-glow_22s_ease-in-out_infinite]"
          />
          <div
            className="absolute -bottom-28 right-1/4 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(253,186,116,0.42),transparent_60%)] blur-3xl opacity-50 animate-[float-soft_26s_ease-in-out_infinite]"
            style={{ animationDelay: "1.4s" }}
          />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl font-bold md:text-4xl">Interested in future roles?</h2>
            <p className="mt-4 text-lg text-white/85">
              Join our talent community to receive updates on new opportunities, events, and technical insights from the SWAMZ team.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/80 bg-white text-black hover:bg-white/90"
                >
                  Share your CV
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/downloads">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/70 bg-white text-black hover:bg-white/85"
                >
                  Meet our teams
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
