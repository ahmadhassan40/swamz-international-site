import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Wrench,
  Gauge,
  Cog,
  Activity,
  Settings,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

const Machineries = () => {
  const categories = [
    {
      icon: Wrench,
      name: "Engine Assembly Systems",
      description:
        "Precision torque tooling, piston presses, and valve train fixtures engineered for repeatable builds.",
      highlights: ["Torque tooling", "Valve seating", "Bearing installation", "Assembly fixtures"],
      link: "/products?category=Engine+Assembly+Tools",
    },
    {
      icon: Gauge,
      name: "Test Benches & Dynamometers",
      description: "Engine dynos, injector benches, and validation rigs for production and reman programs.",
      highlights: ["Power testing", "Fuel diagnostics", "Torque verification", "Performance tuning"],
      link: "/products?category=Test+Benches/Dynamometers",
    },
    {
      icon: Cog,
      name: "Precision Machining",
      description:
        "CNC honing, crank grinding, and resurfacing equipment to restore OEM tolerances every cycle.",
      highlights: ["Cylinder honing", "Crank grinding", "Deck resurfacing", "Precision boring"],
      link: "/products?category=Precision+Tooling",
    },
    {
      icon: Activity,
      name: "Diagnostics & Calibration",
      description: "Compression, leak-down, emissions, and control unit calibration platforms for rapid troubleshooting.",
      highlights: ["Compression testing", "Leak detection", "Emissions analysis", "System calibration"],
      link: "/products?category=Diagnostics/Calibration",
    },
    {
      icon: Settings,
      name: "Automation & CNC Integration",
      description: "Turnkey CNC upgrades, measurement cells, and production automation for engine lines.",
      highlights: ["Automated machining", "Inline metrology", "Process control", "Production analytics"],
      link: "/products?category=CNC+Accessories",
    },
  ];

  const standards = [
    {
      name: "ISO/TS 16949",
      description: "Quality systems for automotive production and relevant service parts organizations.",
    },
    {
      name: "API Spec Q1",
      description: "Standardized procedures for precision machining and critical equipment manufacture.",
    },
    {
      name: "IEC 61511",
      description: "Functional safety lifecycle compliance for industrial control and automation systems.",
    },
    {
      name: "CE Machinery Directive",
      description: "European safety requirements for complex machinery and integrated CNC cells.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-24 pb-36 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(217,119,6,0.15),transparent_60%),_linear-gradient(180deg,rgba(255,252,243,1)_0%,rgba(250,244,230,1)_60%,rgba(255,255,255,1)_100%)]">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-32 -right-24 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-60 bg-[radial-gradient(circle_at_center,rgba(146,64,14,0.55),transparent_60%)] animate-[pulse-glow_18s_ease-in-out_infinite]"
          />
          <div
            className="absolute -bottom-40 -left-20 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-50 bg-[radial-gradient(circle_at_center,rgba(253,186,116,0.45),transparent_60%)] animate-[pulse-glow_20s_ease-in-out_infinite]"
            style={{ animationDelay: "1.3s" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0)_0%,rgba(217,119,6,0.12)_48%,rgba(250,204,21,0.12)_100%)]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-4 mx-auto bg-primary/12 text-primary border-primary/20">
              Engine Machinery Solutions
            </Badge>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground">
              Build, Test, and Automate with Confidence
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Production-grade engine tooling, diagnostics, and automation platforms engineered for tight tolerances and
              continuous uptime across assembly lines and reman centers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products?niche=machineries">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/40 bg-white text-black hover:bg-primary/10 hover:text-black shadow-[0_25px_70px_-35px_rgba(146,64,14,0.55)]"
                >
                  Browse Equipment Catalog
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/30 bg-white text-black hover:bg-primary/10 hover:text-black shadow-[0_20px_55px_-35px_rgba(146,64,14,0.45)]"
                >
                  Request Quotation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="relative py-24 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(217,119,6,0.1),transparent_60%),_linear-gradient(180deg,rgba(255,252,243,1)_0%,rgba(245,234,214,1)_100%)]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(217,119,6,0.12)_0%,rgba(250,204,21,0.1)_100%)] opacity-60" />
          <div
            className="absolute -top-28 left-1/2 -translate-x-1/2 w-[20rem] h-[20rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(253,186,116,0.32),transparent_60%)] blur-3xl opacity-40 animate-[float-soft_20s_ease-in-out_infinite]"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">Equipment Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our complete portfolio covering assembly, machining, testing, and production automation for engine
              programs of every scale.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {categories.map((category, idx) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link to={category.link}>
                  <Card className="relative h-full overflow-hidden border border-primary/15 bg-white/90 backdrop-blur-xl shadow-[0_28px_65px_-40px_rgba(146,64,14,0.55)] transition-all duration-[450ms] group hover:-translate-y-2">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,119,6,0.18),transparent_65%)] opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                    <CardContent className="relative z-10 p-6">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                        <category.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="font-heading font-semibold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground/90 mb-4">{category.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {category.highlights.map((item) => (
                          <Badge key={item} variant="outline" className="text-xs border-primary/30 text-foreground/80">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="relative py-24 overflow-hidden bg-[linear-gradient(180deg,rgba(248,237,215,1)_0%,rgba(255,255,255,1)_55%,rgba(248,237,215,1)_100%)]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(217,119,6,0.2),transparent_65%)] opacity-65" />
          <div
            className="absolute top-1/2 left-10 w-32 h-32 rounded-full bg-[radial-gradient(circle_at_center,rgba(253,186,116,0.32),transparent_60%)] blur-3xl opacity-40 animate-[float-soft_22s_ease-in-out_infinite]"
          />
          <div
            className="absolute top-10 right-16 w-40 h-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(146,64,14,0.35),transparent_60%)] blur-3xl opacity-35 animate-[pulse-glow_24s_ease-in-out_infinite]"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">Compliance &amp; Standards</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every machinery platform is validated against international safety, quality, and functional performance
              benchmarks for mission-critical operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {standards.map((standard, idx) => (
              <motion.div
                key={standard.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="relative overflow-hidden border border-primary/20 bg-white/85 backdrop-blur-xl shadow-[0_24px_50px_-40px_rgba(146,64,14,0.5)]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(253,186,116,0.22),transparent_70%)] opacity-70" />
                  <CardContent className="relative z-10 p-6 text-center">
                    <CheckCircle2 className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{standard.name}</h3>
                    <p className="text-sm text-muted-foreground/90">{standard.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Callout */}
      <section className="relative py-24 overflow-hidden bg-[radial-gradient(circle_at_center,_rgba(217,119,6,0.08),transparent_60%),_linear-gradient(180deg,rgba(255,252,243,1)_0%,rgba(250,242,229,1)_100%)]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(217,119,6,0.12)_0%,rgba(250,204,21,0.1)_100%)] opacity-55" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="relative max-w-4xl mx-auto overflow-hidden border border-primary/20 bg-white/90 backdrop-blur-xl shadow-[0_30px_70px_-40px_rgba(146,64,14,0.55)]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(253,186,116,0.18),transparent_70%)] opacity-80" />
              <CardContent className="relative z-10 p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-primary/12 flex items-center justify-center shadow-[0_20px_38px_-28px_rgba(146,64,14,0.6)]">
                      <Cog className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="font-heading font-bold text-2xl mb-2 text-foreground">
                      Need Help Engineering the Right Setup?
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Our applications specialists will audit your process and recommend the optimal tooling, test
                      equipment, and automation package to meet throughput and quality targets.
                    </p>
                    <Link to="/contact">
                      <Button className="shadow-[0_22px_55px_-30px_rgba(146,64,14,0.55)] text-black">
                        Talk to an Engineer
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue/90 to-teal" />
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-24 left-1/3 w-60 h-60 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35),transparent_60%)] blur-3xl opacity-60 animate-[pulse-glow_22s_ease-in-out_infinite]"
          />
          <div
            className="absolute -bottom-28 right-1/4 w-72 h-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(253,186,116,0.42),transparent_60%)] blur-3xl opacity-50 animate-[float-soft_26s_ease-in-out_infinite]"
            style={{ animationDelay: "1.4s" }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Accelerate Your Engine Program
            </h2>
            <p className="text-lg mb-8 text-white/85">
              Discover the full machinery catalog or book a consultation to configure a turnkey workshop upgrade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products?niche=machineries">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/80 bg-white text-black hover:bg-white/90"
                >
                  View All Equipment
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/70 bg-white text-black hover:bg-white/85"
                >
                  Schedule a Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Machineries;
