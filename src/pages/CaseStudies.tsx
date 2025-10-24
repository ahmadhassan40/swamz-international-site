import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: "automotive-oem",
    title: "Global Automotive OEM Safety Upgrade",
    industry: "Automotive Manufacturing",
    summary:
      "Standardised cut-resistant PPE across eight assembly plants with full compliance documentation and worker training.",
    outcome:
      "45% reduction in hand-related incidents within the first 90 days and 18% increase in worker satisfaction scores.",
    image: "/media/placeholder-case-study.svg",
    highlights: ["8 plants deployed", "ISO 45001 compliant", "Global training rollout"],
  },
  {
    id: "energy-sector",
    title: "Oil & Gas Turnaround Efficiency Program",
    industry: "Energy & Petrochemical",
    summary:
      "Delivered chemical-resistant gloves and calibrated torque tooling for critical maintenance operations during a refinery turnaround.",
    outcome:
      "Completed scope three days ahead of schedule with zero recordable incidents and improved torque traceability.",
    image: "/media/placeholder-machinery.svg",
    highlights: ["Zero Lost Time Injuries", "Digital torque records", "24/7 field support"],
  },
  {
    id: "remanufacturing",
    title: "Engine Remanufacturer Precision Upgrade",
    industry: "Engine Remanufacturing",
    summary:
      "Supplied CNC honing, crankshaft grinding, and leak testing equipment with integrated quality assurance workflows.",
    outcome:
      "Reduced rework by 32% and unlocked new OEM remanufacturing contracts with verified process capability data.",
    image: "/media/placeholder-gloves.svg",
    highlights: ["Cpk 1.67 achieved", "Full calibration program", "Remote diagnostics"],
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background pt-20 pb-36">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <Badge className="mb-4 mx-auto bg-primary/10 text-primary">Proven Results</Badge>
            <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Case Studies & Success Stories
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground">
              Discover how SWAMZ International partners with industry leaders to deliver measurable safety and performance outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden border-border/80">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <Badge className="absolute left-4 top-4 bg-black/60 text-white backdrop-blur-sm">
                      {study.industry}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground">{study.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{study.summary}</p>
                    <div className="mt-4 rounded-lg bg-muted/40 p-4">
                      <h4 className="text-sm font-semibold text-foreground/80">Measured impact</h4>
                      <p className="mt-2 text-sm text-muted-foreground">{study.outcome}</p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {study.highlights.map((item) => (
                        <Badge key={item} variant="outline" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-border/60 bg-muted/20 p-6">
                    <Link to="/contact" className="w-full">
                      <Button variant="outline" className="w-full">
                        Request full case file
                        <FileText className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 p-10 text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground">
              Ready to create your own success story?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our team will collaborate with you to define KPIs, deploy the right solutions, and measure impact every step of the way.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Talk to an expert
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/downloads">
                <Button variant="outline" size="lg">
                  View solution briefs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
