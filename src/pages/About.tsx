import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Globe, Handshake, Layers3, Users } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  {
    icon: Handshake,
    title: "Partnership mindset",
    description: "We operate as an extension of your team with on-the-ground support and accountability.",
  },
  {
    icon: Layers3,
    title: "End-to-end capability",
    description: "From product engineering to global logistics, we deliver complete program coverage.",
  },
  {
    icon: CheckCircle2,
    title: "Reliability first",
    description: "Every product batch is traceable with quality assurance built into the process.",
  },
  {
    icon: Users,
    title: "People powered",
    description: "Our diverse team of engineers, safety consultants, and project managers drive your outcomes.",
  },
  {
    icon: Globe,
    title: "Global footprint",
    description: "Regional hubs in the Middle East, Asia Pacific, and Europe ensure responsive fulfillment.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <section className="overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background pt-20 pb-36">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <Badge className="mb-4 mx-auto bg-primary/10 text-primary">About SWAMZ International</Badge>
            <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Engineering safety and performance for the world’s toughest environments
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              SWAMZ International combines decades of manufacturing expertise with technical field experience to deliver
              protective textiles and precision engine machinery that keep your operations running at peak reliability.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border/70 bg-card/80 p-4 text-center">
                <p className="text-3xl font-semibold text-primary">30+</p>
                <p className="text-sm text-muted-foreground">Years supporting industrial leaders</p>
              </div>
              <div className="rounded-xl border border-border/70 bg-card/80 p-4 text-center">
                <p className="text-3xl font-semibold text-primary">60+</p>
                <p className="text-sm text-muted-foreground">Countries with active customers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground">Our guiding principles</h2>
            <p className="mt-4 text-muted-foreground">
              These core values shape how we design, manufacture, and deliver solutions tailored to your mission-critical needs.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Card className="h-full border-border/70">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">{value.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-accent/40 bg-accent/10 p-8"
            >
              <h3 className="font-heading text-2xl font-semibold text-foreground">Integrated global support</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                With technical centres in Dubai, Shanghai, and Hamburg, SWAMZ International provides regional stocking,
                product customisation, and multilingual support. Dedicated account managers ensure proactive communication
                and rapid response for urgent requirements.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-foreground">
                <li>- 24/7 technical helpline for critical operations</li>
                <li>- Application engineering for glove selection and machinery integration</li>
                <li>- Logistics program design with bonded warehousing and VMI options</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="rounded-2xl border border-primary/40 bg-primary/10 p-8"
            >
              <h3 className="font-heading text-2xl font-semibold text-foreground">Certifications & memberships</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>- ISO 9001 Quality Management</li>
                <li>- ISO 14001 Environmental Management</li>
                <li>- EN ISO 20345 PPE manufacturing compliance</li>
                <li>- Member, International Safety Equipment Association (ISEA)</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
