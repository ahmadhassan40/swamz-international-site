import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Mail, MapPin, Rocket } from "lucide-react";
import { motion } from "framer-motion";

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
      "Lead vendor development, strategic sourcing, and bonded warehouse programs to support global fulfillment.",
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
      <section className="bg-gradient-to-br from-background via-muted/20 to-background pt-20 pb-36">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Badge className="mb-4 mx-auto bg-accent/10 text-accent">Careers at SWAMZ</Badge>
            <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Build the future of industrial safety and performance
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground">
              Join a global team of engineers, product specialists, and supply chain experts solving critical challenges for heavy industry.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
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
                  <Card className="h-full border-border/70">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="font-heading text-2xl font-semibold text-foreground">{role.title}</h3>
                        <Badge variant="outline">{role.type}</Badge>
                      </div>
                      <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {role.location}
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{role.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {role.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="border-t border-border/60 bg-muted/20 p-6">
                      <Button variant="outline" className="w-full">
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
              <Card className="border-primary/40 bg-primary/10">
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
                  <div className="mt-8 rounded-lg border border-primary/40 bg-background/80 p-4 text-sm text-muted-foreground">
                    Can't find a role that fits? Send your resume to <span className="text-primary">talent@swamz-international.com</span> and we'll get in touch when something opens up.
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
