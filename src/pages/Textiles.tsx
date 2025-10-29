import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  HandMetal,
  Flame,
  Droplets,
  Snowflake,
  Scissors,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

const Textiles = () => {
  const categories = [
    {
      icon: Scissors,
      name: "Cut-Resistant",
      description: "ANSI A1-A9 rated gloves with HPPE and Kevlar fibers for sharp object handling.",
      standards: ["ANSI/ISEA 105", "EN388 Level A-F"],
      link: "/products?category=Cut-Resistant",
    },
    {
      icon: Droplets,
      name: "Nitrile Coated",
      description: "Chemical and oil-resistant nitrile gloves for wet and oily applications.",
      standards: ["EN374", "AQL 1.5"],
      link: "/products?category=Nitrile",
    },
    {
      icon: HandMetal,
      name: "Leather Work Gloves",
      description: "Premium grain leather for heavy-duty construction, welding, and industrial work.",
      standards: ["EN420", "EN388"],
      link: "/products?category=Leather",
    },
    {
      icon: Flame,
      name: "Heat-Resistant",
      description: "Extreme temperature protection up to 1000°C for foundries and welding applications.",
      standards: ["EN407", "NFPA 1971"],
      link: "/products?category=Heat-Resistant",
    },
    {
      icon: Shield,
      name: "Disposable Nitrile",
      description: "Medical-grade powder-free gloves for cleanroom, lab, and healthcare environments.",
      standards: ["FDA 510(k)", "EN455", "ASTM D6319"],
      link: "/products?category=Disposable",
    },
    {
      icon: Snowflake,
      name: "Specialty Protection",
      description: "Electrical insulating, cryogenic, and application-specific safety gloves.",
      standards: ["ASTM D120", "EN511", "IEC 60903"],
      link: "/products?category=Specialty",
    },
  ];

  const safetyStandards = [
    {
      name: "EN388:2016",
      description: "European standard for mechanical risks (abrasion, cut, tear, puncture)",
    },
    {
      name: "ANSI/ISEA 105",
      description: "American standard for hand protection selection criteria",
    },
    {
      name: "EN374",
      description: "Protection against chemicals and microorganisms",
    },
    {
      name: "EN407",
      description: "Thermal risks (heat and/or fire) protection",
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
            <Badge className="mb-4 mx-auto bg-primary/10 text-primary border-primary/20">
              Industrial Protective Textiles
            </Badge>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground">
              Precision Protection for Every Application
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Comprehensive range of industrial protective gloves engineered to meet the highest safety standards.
              From cut resistance to chemical protection, we have the right solution for your workforce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products?niche=textiles">
                <Button
                  variant="hero"
                  size="lg"
                  className="group shadow-[0_25px_70px_-25px_rgba(146,64,14,0.55)] hover:shadow-[0_32px_90px_-30px_rgba(146,64,14,0.6)]"
                >
                  Browse Glove Catalog
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/30 bg-white text-primary hover:bg-primary/10 hover:text-primary shadow-[0_18px_45px_-30px_rgba(146,64,14,0.5)]"
                >
                  Get Expert Advice
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Categories Grid */}
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
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">Glove Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our complete range of protective gloves designed for specific hazards and applications.
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
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,119,6,0.15),transparent_65%)] opacity-0 group-hover:opacity-80 transition-opacity duration-300" />
                    <CardContent className="relative z-10 p-6">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                        <category.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="font-heading font-semibold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground/90 mb-4">{category.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {category.standards.map((standard) => (
                          <Badge
                            key={standard}
                            variant="outline"
                            className="text-xs border-primary/30 text-foreground/80"
                          >
                            {standard}
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

      {/* Safety Standards */}
      <section className="relative py-24 overflow-hidden bg-[linear-gradient(180deg,rgba(248,237,215,1)_0%,rgba(255,255,255,1)_55%,rgba(248,237,215,1)_100%)]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(217,119,6,0.18),transparent_65%)] opacity-65" />
          <div
            className="absolute top-1/2 left-12 w-32 h-32 rounded-full bg-[radial-gradient(circle_at_center,rgba(253,186,116,0.32),transparent_60%)] blur-3xl opacity-40 animate-[float-soft_22s_ease-in-out_infinite]"
          />
          <div
            className="absolute top-10 right-16 w-40 h-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(146,64,14,0.32),transparent_60%)] blur-3xl opacity-35 animate-[pulse-glow_24s_ease-in-out_infinite]"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">
              Compliance &amp; Safety Standards
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All SWAMZ protective gloves meet or exceed international safety standards for PPE.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {safetyStandards.map((standard, idx) => (
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

      {/* Sizing Guide Callout */}
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
                      <HandMetal className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                  <div className="flex-grow text-center md:text-left">
                    <h3 className="font-heading font-bold text-2xl mb-2 text-foreground">
                      Need Help with Sizing or Selection?
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Our technical team can help you choose the right glove type, size, and protection level for your specific application.
                    </p>
                    <Link to="/contact">
                      <Button className="shadow-[0_22px_55px_-30px_rgba(146,64,14,0.55)]">
                        Contact Our Experts
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
              Protect Your Workforce with Confidence
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Browse our complete catalog or request samples for evaluation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products?niche=textiles">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/80 bg-white text-brand-blue hover:bg-white/90 hover:text-brand-blue shadow-[0_22px_60px_-35px_rgba(255,255,255,0.55)]"
                >
                  View All Gloves
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/60 text-black hover:bg-white/15 hover:text-black"
                >
                  Request Samples
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Textiles;
