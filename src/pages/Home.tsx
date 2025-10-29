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
      <section className="relative pt-24 pb-40 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(217,119,6,0.14),transparent_60%),_linear-gradient(180deg,rgba(255,248,235,1)_0%,rgba(255,255,255,1)_65%)]">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-40 -right-32 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-60 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.55),transparent_60%)] animate-[pulse-glow_18s_ease-in-out_infinite]"
          />
          <div
            className="absolute -bottom-48 -left-32 w-[30rem] h-[30rem] rounded-full blur-3xl opacity-50 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.45),transparent_60%)] animate-[pulse-glow_16s_ease-in-out_infinite]"
            style={{ animationDelay: "1.5s" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0)_0%,rgba(217,119,6,0.1)_45%,rgba(245,158,11,0.1)_100%)]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
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
              <span className="text-primary drop-shadow-[0_6px_18px_rgba(217,119,6,0.45)]">
                Power You Can Trust.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Leading B2B supplier of industrial protective gloves and precision engine machinery.
              Trusted globally for quality, compliance, and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button
                  variant="hero"
                  size="lg"
                  className="group shadow-[0_25px_70px_-25px_rgba(120,53,15,0.55)] hover:shadow-[0_35px_90px_-25px_rgba(146,64,14,0.6)]"
                >
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/30 bg-white text-primary hover:bg-primary/10 hover:text-primary shadow-[0_20px_45px_-28px_rgba(120,53,15,0.6)]"
                >
                  Request Quote
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative z-10 mt-14"
          >
            <div className="mx-auto max-w-5xl rounded-3xl border border-white/60 bg-white/80 backdrop-blur-3xl shadow-[0_25px_80px_-35px_rgba(120,53,15,0.55)]">
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
                  <div
                    key={item.title}
                    className="rounded-2xl border border-primary/15 bg-white/92 p-5 text-left shadow-[0_22px_40px_-35px_rgba(146,64,14,0.45)]"
                  >
                    <p className="text-sm uppercase tracking-wider text-primary">{item.title}</p>
                    <p className="mt-3 text-sm text-muted-foreground/90">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Two Niche Features */}
      <section className="relative py-24 overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(146,64,14,0.12),transparent_60%),_linear-gradient(180deg,rgba(255,252,243,1)_0%,rgba(252,245,232,1)_100%)]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(217,119,6,0.14)_0%,rgba(234,179,8,0.12)_100%)] opacity-60" />
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-[22rem] h-[22rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.35),transparent_60%)] blur-3xl opacity-40 animate-[float-soft_18s_ease-in-out_infinite]"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -12, scale: 1.02 }}
            >
              <Link to="/textiles" className="group block">
                <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-white/92 p-8 backdrop-blur-xl shadow-[0_30px_70px_-45px_rgba(146,64,14,0.65)] transition-all duration-[450ms]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,119,6,0.18),transparent_60%)] opacity-80" />
                  <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                    <HandMetal className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="relative z-10 font-heading font-bold text-2xl mb-3 text-foreground group-hover:text-primary transition-colors">
                    Protective Textiles
                  </h3>
                  <p className="relative z-10 text-muted-foreground mb-4">
                    Complete range of industrial gloves: cut-resistant, nitrile, leather, heat-resistant, and specialty protection for every application.
                  </p>
                  <div className="relative z-10 flex items-center text-primary font-medium group-hover:gap-2 transition-all">
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
              whileHover={{ y: -12, scale: 1.02 }}
            >
              <Link to="/machineries" className="group block">
                <div className="relative overflow-hidden rounded-2xl border border-accent/25 bg-white/92 p-8 backdrop-blur-xl shadow-[0_30px_70px_-45px_rgba(234,179,8,0.6)] transition-all duration-[450ms]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.2),transparent_60%)] opacity-80" />
                  <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent/10 mb-6 group-hover:bg-accent/20 transition-colors">
                    <Cog className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="relative z-10 font-heading font-bold text-2xl mb-3 text-foreground group-hover:text-accent transition-colors">
                    Engine Machineries
                  </h3>
                  <p className="relative z-10 text-muted-foreground mb-4">
                    Precision tooling, diagnostic equipment, test benches, and CNC solutions for engine assembly, testing, and reconditioning.
                  </p>
                  <div className="relative z-10 flex items-center text-accent font-medium group-hover:gap-2 transition-all">
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
      <section className="relative py-24 overflow-hidden bg-[linear-gradient(180deg,rgba(255,248,235,1)_0%,rgba(253,241,223,1)_50%,rgba(255,255,255,1)_100%)]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(217,119,6,0.2),transparent_65%)] opacity-60" />
          <div
            className="absolute top-1/2 left-12 w-32 h-32 rounded-full bg-[radial-gradient(circle_at_center,rgba(253,186,116,0.35),transparent_60%)] blur-2xl opacity-40 animate-[float-soft_20s_ease-in-out_infinite]"
          />
          <div
            className="absolute top-10 right-16 w-40 h-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(146,64,14,0.35),transparent_60%)] blur-3xl opacity-30 animate-[pulse-glow_22s_ease-in-out_infinite]"
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
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-xl border border-white/50 bg-white/85 p-6 shadow-[0_25px_60px_-45px_rgba(120,53,15,0.5)] backdrop-blur-2xl transition-all duration-300"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,119,6,0.2),transparent_65%)] opacity-70" />
                <div className="relative z-10 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="relative z-10 font-heading font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
                <p className="relative z-10 text-sm text-muted-foreground/90">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="relative py-24 overflow-hidden bg-[radial-gradient(circle_at_center,_rgba(217,119,6,0.12),transparent_60%),_linear-gradient(180deg,rgba(255,252,243,1)_0%,rgba(248,240,222,1)_100%)]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(217,119,6,0.14)_0%,rgba(234,179,8,0.14)_100%)] opacity-55" />
          <div
            className="absolute -top-32 right-12 w-44 h-44 rounded-full bg-[radial-gradient(circle_at_center,rgba(146,64,14,0.4),transparent_60%)] blur-3xl opacity-40 animate-[float-soft_24s_ease-in-out_infinite]"
          />
          <div
            className="absolute -bottom-20 left-16 w-36 h-36 rounded-full bg-[radial-gradient(circle_at_center,rgba(253,186,116,0.3),transparent_60%)] blur-3xl opacity-40 animate-[pulse-glow_26s_ease-in-out_infinite]"
            style={{ animationDelay: "1.2s" }}
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
              <Button
                variant="outline"
                size="lg"
                className="border-primary/40 bg-white/90 text-primary hover:bg-primary/10 hover:text-primary shadow-[0_20px_45px_-28px_rgba(120,53,15,0.45)]"
              >
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-24 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(217,119,6,0.4),transparent_65%)] opacity-70" />
          <div
            className="absolute -top-40 left-1/3 w-64 h-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(253,186,116,0.32),transparent_60%)] blur-3xl opacity-50 animate-[float-soft_28s_ease-in-out_infinite]"
          />
          <div
            className="absolute bottom-[-6rem] right-10 w-52 h-52 rounded-full bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.32),transparent_60%)] blur-3xl opacity-45 animate-[pulse-glow_28s_ease-in-out_infinite]"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <StatCard icon={Users} value="5,000+" label="Global Clients" delay={0} />
            <StatCard icon={Globe} value="60+" label="Countries Served" delay={0.1} />
            <StatCard icon={Award} value="25+" label="Industry Certifications" delay={0.2} />
            <StatCard icon={CheckCircle2} value="99.8%" label="Customer Satisfaction" delay={0.3} />
          </div>
        </div>
      </section>

      {/* Certifications Strip */}
      <section className="relative py-16 overflow-hidden bg-[linear-gradient(180deg,rgba(0,0,0,0.05)_0%,rgba(217,119,6,0.12)_100%)]">
        <div className="absolute inset-0 opacity-60 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.45),transparent_65%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-6">
            {["ISO 9001", "CE", "EN388", "ANSI", "FDA 510(k)", "IATF 16949"].map((cert, idx) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 0.9, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="px-5 py-2 rounded-full border border-primary/20 bg-white/80 backdrop-blur-xl text-sm font-medium uppercase tracking-wider text-primary shadow-[0_18px_40px_-30px_rgba(146,64,14,0.45)]"
              >
                {cert}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 overflow-hidden bg-[radial-gradient(circle_at_center,_rgba(217,119,6,0.1),transparent_60%),_linear-gradient(180deg,rgba(255,252,243,1)_0%,rgba(250,244,230,1)_100%)]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(217,119,6,0.14)_0%,rgba(234,179,8,0.14)_100%)] opacity-55" />
          <div
            className="absolute -top-28 left-16 w-40 h-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.35),transparent_60%)] blur-3xl opacity-40 animate-[pulse-glow_26s_ease-in-out_infinite]"
          />
          <div
            className="absolute -bottom-24 right-10 w-48 h-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(253,186,116,0.32),transparent_60%)] blur-3xl opacity-45 animate-[float-soft_30s_ease-in-out_infinite]"
            style={{ animationDelay: "1.4s" }}
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
      <section className="relative py-28 overflow-hidden text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue/90 to-teal" />
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-24 left-1/3 w-60 h-60 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35),transparent_60%)] blur-3xl opacity-60 animate-[pulse-glow_22s_ease-in-out_infinite]"
          />
          <div
            className="absolute -bottom-28 right-1/4 w-72 h-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(253,186,116,0.42),transparent_60%)] blur-3xl opacity-50 animate-[float-soft_26s_ease-in-out_infinite]"
            style={{ animationDelay: "1.6s" }}
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
              Ready to Elevate Your Safety and Performance?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Get in touch with our team to discuss your requirements and receive a customized quote.
            </p>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white/70 bg-white text-brand-blue hover:bg-white/90 hover:text-brand-blue shadow-[0_25px_70px_-35px_rgba(255,255,255,0.6)]"
              >
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
