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
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";

const Textiles = () => {
  const categories = [
    {
      icon: Scissors,
      name: "Cut-Resistant",
      description: "ANSI A1-A9 rated gloves with HPPE and Kevlar fibers for sharp object handling.",
      standards: ["ANSI/ISEA 105", "EN388 Level A-F"],
      link: "/products?category=Cut-Resistant"
    },
    {
      icon: Droplets,
      name: "Nitrile Coated",
      description: "Chemical and oil-resistant nitrile gloves for wet and oily applications.",
      standards: ["EN374", "AQL 1.5"],
      link: "/products?category=Nitrile"
    },
    {
      icon: HandMetal,
      name: "Leather Work Gloves",
      description: "Premium grain leather for heavy-duty construction, welding, and industrial work.",
      standards: ["EN420", "EN388"],
      link: "/products?category=Leather"
    },
    {
      icon: Flame,
      name: "Heat-Resistant",
      description: "Extreme temperature protection up to 1000°C for foundries and welding applications.",
      standards: ["EN407", "NFPA 1971"],
      link: "/products?category=Heat-Resistant"
    },
    {
      icon: Shield,
      name: "Disposable Nitrile",
      description: "Medical-grade powder-free gloves for cleanroom, lab, and healthcare environments.",
      standards: ["FDA 510(k)", "EN455", "ASTM D6319"],
      link: "/products?category=Disposable"
    },
    {
      icon: Snowflake,
      name: "Specialty Protection",
      description: "Electrical insulating, cryogenic, and application-specific safety gloves.",
      standards: ["ASTM D120", "EN511", "IEC 60903"],
      link: "/products?category=Specialty"
    }
  ];

  const safetyStandards = [
    {
      name: "EN388:2016",
      description: "European standard for mechanical risks (abrasion, cut, tear, puncture)"
    },
    {
      name: "ANSI/ISEA 105",
      description: "American standard for hand protection selection criteria"
    },
    {
      name: "EN374",
      description: "Protection against chemicals and microorganisms"
    },
    {
      name: "EN407",
      description: "Thermal risks (heat and/or fire) protection"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Industrial Protective Textiles
            </Badge>
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-foreground">
              Precision Protection for Every Application
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Comprehensive range of industrial protective gloves engineered to meet the highest safety standards. 
              From cut resistance to chemical protection, we have the right solution for your workforce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products?niche=textiles">
                <Button variant="hero" size="lg">
                  Browse Glove Catalog
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">Get Expert Advice</Button>
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">
              Glove Categories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our complete range of protective gloves designed for specific hazards and applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {categories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link to={category.link}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                    <CardContent className="p-6">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                        <category.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="font-heading font-semibold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {category.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {category.standards.map((standard, sidx) => (
                          <Badge key={sidx} variant="outline" className="text-xs">
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">
              Compliance & Safety Standards
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All SWAMZ protective gloves meet or exceed international safety standards for PPE.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {safetyStandards.map((standard, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6 text-center">
                    <CheckCircle2 className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">
                      {standard.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {standard.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sizing Guide Callout */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
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
                      <Button variant="default">
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
      <section className="py-20 bg-gradient-to-r from-brand-blue to-teal text-white">
        <div className="container mx-auto px-4">
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
                <Button variant="outline" size="lg" className="border-white bg-white text-brand-blue hover:bg-white/90">
                  View All Gloves
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
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
