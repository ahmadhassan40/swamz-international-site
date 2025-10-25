import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { StatCard } from "@/components/StatCard";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Shield,
  Globe,
  Award,
  Users,
  TrendingUp,
  HandMetal,
  Cog,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import products from "@/data/products.json";

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-36 overflow-hidden gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              Trusted by Global Industries
            </Badge>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground">
              Precision You Can Wear.
              <br />
              <span className="text-primary drop-shadow-[0_6px_18px_rgba(30,64,175,0.4)]">
                Power You Can Trust.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Leading B2B supplier of industrial protective gloves and precision engine machinery.
              Trusted globally for quality, compliance, and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button variant="hero" size="lg" className="group">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Request Quote
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative z-10 mt-12"
          >
            <div className="mx-auto max-w-5xl rounded-3xl border border-border/60 bg-card/70 backdrop-blur-xl shadow-2xl">
              <div className="grid gap-6 px-8 py-10 md:grid-cols-3">
                {[
                  {
                    title: "Global fulfilment",
                    description: "Stocked regional warehouses across the Middle East, Asia Pacific, and Europe.",
                  },
                  {
                    title: "ISO-certified manufacturing",
                    description: "Traceable production with ISO 9001, ISO 14001, and EN-compliant processes.",
                  },
                  {
                    title: "24/7 technical support",
                    description: "Application engineers on call for commissioning, audits, and troubleshooting.",
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-2xl border border-border/60 bg-background/40 p-5 text-left">
                    <p className="text-sm uppercase tracking-wider text-primary">{item.title}</p>
                    <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Two Niche Features */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/textiles" className="group block">
                <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                    <HandMetal className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-3 text-foreground group-hover:text-primary transition-colors">
                    Protective Textiles
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Complete range of industrial gloves: cut-resistant, nitrile, leather, heat-resistant, and specialty protection for every application.
                  </p>
                  <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                    Explore Textiles
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/machineries" className="group block">
                <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent/10 mb-6 group-hover:bg-accent/20 transition-colors">
                    <Cog className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-3 text-foreground group-hover:text-accent transition-colors">
                    Engine Machineries
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Precision tooling, diagnostic equipment, test benches, and CNC solutions for engine assembly, testing, and reconditioning.
                  </p>
                  <div className="flex items-center text-accent font-medium group-hover:gap-2 transition-all">
                    Explore Machineries
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why SWAMZ International */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">
              Why Partner with SWAMZ International
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built on decades of expertise, we deliver solutions that meet the highest standards of safety and performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Certified Quality",
                description: "ISO 9001, CE, ANSI, EN388 certified products meeting global safety standards.",
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Distribution network spanning Middle East, Asia Pacific, Europe, and Americas.",
              },
              {
                icon: Award,
                title: "Industry Expertise",
                description: "30+ years serving automotive, oil & gas, manufacturing, and heavy industries.",
              },
              {
                icon: Users,
                title: "Technical Support",
                description: "Expert applications engineers to help specify the right solution for your needs.",
              },
              {
                icon: TrendingUp,
                title: "Innovation Driven",
                description: "Continuous R&D to bring latest technology and materials to market.",
              },
              {
                icon: CheckCircle2,
                title: "Compliance Assured",
                description: "Full documentation, testing certificates, and regulatory compliance support.",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">
              Featured Products
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular industrial protection and precision equipment solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/products">
              <Button variant="outline" size="lg">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <StatCard icon={Users} value="5,000+" label="Global Clients" delay={0} />
            <StatCard icon={Globe} value="60+" label="Countries Served" delay={0.1} />
            <StatCard icon={Award} value="25+" label="Industry Certifications" delay={0.2} />
            <StatCard icon={CheckCircle2} value="99.8%" label="Customer Satisfaction" delay={0.3} />
          </div>
        </div>
      </section>

      {/* Certifications Strip */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {["ISO 9001", "CE", "EN388", "ANSI", "FDA 510(k)", "IATF 16949"].map((cert, idx) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="font-heading font-bold text-xl text-foreground"
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">
              Trusted by Industry Leaders
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See what our customers have to say about working with SWAMZ International.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <TestimonialCard
              quote="The PrecisionFlex gloves transformed our safety culture. Workers feel protected without sacrificing the touch they need for precision work."
              author="Klaus Hoffmann"
              role="Safety Director"
              company="European Automotive OEM"
            />
            <TestimonialCard
              quote="ChemShield gloves provide the chemical resistance we need without compromising flexibility. Our maintenance team trusts them completely."
              author="Ahmed Al-Farsi"
              role="HSE Manager"
              company="Middle East Petrochemical Complex"
            />
            <TestimonialCard
              quote="The TorqueMaster system gave us the precision and documentation we needed to confidently stand behind our remanufactured engines."
              author="Michael Patterson"
              role="Quality Assurance Lead"
              company="North American Remanufacturer"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-blue to-teal text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Ready to Elevate Your Safety and Performance?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Get in touch with our team to discuss your requirements and receive a customized quote.
            </p>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white bg-white text-brand-blue hover:bg-white/90">
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
