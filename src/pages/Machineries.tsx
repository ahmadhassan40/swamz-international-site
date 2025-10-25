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
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

const Machineries = () => {
  const categories = [
    {
      icon: Wrench,
      name: "Engine Assembly Tools",
      description:
        "Precision torque wrenches, piston presses, valve seat cutters, and specialized assembly equipment.",
      applications: ["Torque application", "Piston installation", "Valve work", "Bearing installation"],
      link: "/products?category=Engine+Assembly+Tools",
    },
    {
      icon: Gauge,
      name: "Test Benches & Dynamometers",
      description: "Engine dynos, fuel injector test benches, and performance validation systems.",
      applications: ["Power testing", "Torque measurement", "Fuel system diagnostics", "Performance tuning"],
      link: "/products?category=Test+Benches/Dynamometers",
    },
    {
      icon: Cog,
      name: "Precision Tooling",
      description:
        "CNC grinders, cylinder honing machines, crankshaft grinders, and precision machining equipment.",
      applications: ["Cylinder honing", "Crankshaft grinding", "Block deck resurfacing", "Precision boring"],
      link: "/products?category=Precision+Tooling",
    },
    {
      icon: Activity,
      name: "Diagnostics & Calibration",
      description: "Emissions analyzers, compression testers, leak-down testers, and calibration equipment.",
      applications: ["Emissions testing", "Compression diagnostics", "Leak detection", "System calibration"],
      link: "/products?category=Diagnostics/Calibration",
    },
    {
      icon: Settings,
      name: "CNC & Automation",
      description: "CNC accessories, automated measurement systems, and production line integration tools.",
      applications: ["Automated machining", "Quality inspection", "Process control", "Production optimization"],
      link: "/products?category=CNC+Accessories",
    },
  ];

  const capabilities = [
    {
      icon: CheckCircle2,
      title: "OEM Quality Standards",
      description: "Equipment meets or exceeds automotive OEM specifications",
    },
    {
      icon: TrendingUp,
      title: "Precision Engineering",
      description: "Accuracy to ±0.005mm for critical engine components",
    },
    {
      icon: Wrench,
      title: "After-Sales Support",
      description: "Technical support, spare parts, and calibration services",
    },
    {
      icon: Settings,
      title: "Custom Solutions",
      description: "Bespoke equipment design for specialized applications",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-20 pb-36 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-4 mx-auto bg-accent/10 text-accent border-accent/20">
              Engine Machinery &amp; Tooling
            </Badge>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground">
              Precision Equipment for Engine Excellence
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Complete range of professional-grade engine service equipment, from assembly tools to diagnostic systems.
              Built for workshops, remanufacturing facilities, and OEM production lines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products?niche=machineries">
                <Button variant="hero" size="lg">
                  Browse Equipment Catalog
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Request Quotation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </section>

      {/* Equipment Categories */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">Equipment Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From precision hand tools to automated CNC systems, we supply everything needed for engine work.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {categories.map((category, idx) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link to={category.link}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                            <category.icon className="h-7 w-7 text-accent" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-heading font-semibold text-xl mb-2 text-foreground group-hover:text-accent transition-colors">
                            {category.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {category.applications.map((app) => (
                              <Badge key={app} variant="outline" className="text-xs">
                                {app}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">Operational Advantages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine engineering precision with comprehensive service to keep your operations running.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {capabilities.map((capability) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <capability.icon className="h-10 w-10 text-accent mx-auto mb-4" />
                    <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{capability.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto rounded-3xl border border-accent/30 bg-accent/10 p-10 text-center"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">
              Upgrade Your Engine Facility
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Speak with our technical specialists to configure the right mix of tooling, diagnostics, and automation for your engine program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products?niche=machineries">
                <Button variant="outline" size="lg">
                  Explore Machineries
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Request Consultation
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
