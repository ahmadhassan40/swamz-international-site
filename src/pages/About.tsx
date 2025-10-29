import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Globe, Handshake, Layers3, Users, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
    description: "Our multi-disciplinary team of engineers, safety consultants, and project managers drive your outcomes.",
  },
  {
    icon: Globe,
    title: "Global footprint",
    description: "Regional hubs in the Middle East, Asia Pacific, and Europe ensure responsive fulfilment.",
  },
];

const About = () => {
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
            className="mx-auto max-w-4xl text-center"
          >
            <Badge className="mb-4 mx-auto bg-primary/12 text-primary border-primary/20">About SWAMZ International</Badge>
            <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Engineering safety and performance for the world’s toughest environments
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
              SWAMZ International combines decades of manufacturing expertise with field experience to deliver protective textiles and
              precision engine machinery that keep your operations running at peak reliability.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[{ label: "Years supporting industrial leaders", value: "30+" }, { label: "Countries with active customers", value: "60+" }].map((item) => (
                <div key={item.label} className="rounded-xl border border-primary/20 bg-white/85 p-4 text-center shadow-[0_18px_45px_-30px_rgba(146,64,14,0.45)]">
                  <p className="text-3xl font-semibold text-primary">{item.value}</p>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_center,_rgba(217,119,6,0.1),transparent_60%),_linear-gradient(180deg,rgba(255,252,243,1)_0%,rgba(245,234,214,1)_100%)] py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(217,119,6,0.12)_0%,rgba(250,204,21,0.1)_100%)] opacity-60" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
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
                <Card className="h-full border border-primary/20 bg-white/90 backdrop-blur-xl shadow-[0_28px_65px_-40px_rgba(146,64,14,0.55)]">
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

      {/* Global Support */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(248,237,215,1)_0%,rgba(255,255,255,1)_55%,rgba(248,237,215,1)_100%)] py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(217,119,6,0.2),transparent_65%)] opacity-65" />
          <div
            className="absolute top-1/2 left-12 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_center,rgba(253,186,116,0.32),transparent_60%)] blur-3xl opacity-40 animate-[float-soft_22s_ease-in-out_infinite]"
          />
          <div
            className="absolute top-10 right-16 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(146,64,14,0.35),transparent_60%)] blur-3xl opacity-35 animate-[pulse-glow_24s_ease-in-out_infinite]"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-primary/20 bg-white/90 p-8 shadow-[0_28px_60px_-45px_rgba(146,64,14,0.5)]"
            >
              <h3 className="font-heading text-2xl font-semibold text-foreground">Integrated global support</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                With technical centres in Dubai, Shanghai, and Hamburg, SWAMZ International provides regional stocking,
                product customisation, and multilingual support. Dedicated account managers ensure proactive communication
                and rapid response for urgent requirements.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-foreground/90">
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
              className="rounded-2xl border border-primary/20 bg-white/90 p-8 shadow-[0_28px_60px_-45px_rgba(146,64,14,0.5)]"
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
            <h2 className="font-heading text-3xl font-bold md:text-4xl">
              Let’s build your next success story
            </h2>
            <p className="mt-4 text-lg text-white/85">
              Speak with our leadership team about long-term partnership models, co-engineering initiatives, and global
              deployment programs.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/80 bg-white text-black hover:bg-white/90"
                >
                  Connect with leadership
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/downloads">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/70 bg-white text-black hover:bg-white/85"
                >
                  Download company profile
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
