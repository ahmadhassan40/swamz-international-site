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
      {/* Hero */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(217,119,6,0.15),transparent_60%),_linear-gradient(180deg,rgba(255,252,243,1)_0%,rgba(250,244,230,1)_65%,rgba(255,255,255,1)_100%)] pt-24 pb-36">
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
            <Badge className="mb-4 mx-auto bg-primary/12 text-primary border-primary/20">Proven Results</Badge>
            <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Case Studies &amp; Success Stories
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              See how SWAMZ International partners with global leaders to deliver measurable safety, productivity, and
              compliance outcomes across high-stakes environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_center,_rgba(217,119,6,0.08),transparent_60%),_linear-gradient(180deg,rgba(255,252,243,1)_0%,rgba(250,242,229,1)_100%)] py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(217,119,6,0.12)_0%,rgba(250,204,21,0.1)_100%)] opacity-60" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="relative h-full overflow-hidden border border-primary/15 bg-white/90 backdrop-blur-xl shadow-[0_28px_65px_-40px_rgba(146,64,14,0.55)]">
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
                    <div className="mt-4 rounded-lg bg-muted/20 p-4">
                      <h4 className="text-sm font-semibold text-foreground/80">Measured impact</h4>
                      <p className="mt-2 text-sm text-muted-foreground">{study.outcome}</p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {study.highlights.map((item) => (
                        <Badge key={item} variant="outline" className="text-xs border-primary/30 text-foreground/80">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-primary/20 bg-muted/20 p-6">
                    <Link to="/contact" className="w-full">
                      <Button
                        variant="outline"
                        className="w-full border-primary/30 bg-white text-black hover:bg-primary/10 hover:text-black"
                      >
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

      {/* CTA */}
      <section className="relative overflow-hidden py-28 text-white">
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
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl font-bold md:text-4xl">Ready to Create Your Own Success Story?</h2>
            <p className="mt-4 text-lg text-white/85">
              Our team will co-author measurable KPIs, deploy the right solutions, and track performance every step of the
              engagement.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/80 bg-white text-black hover:bg-white/90"
                >
                  Talk to an Expert
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/downloads">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/70 bg-white text-black hover:bg-white/85"
                >
                  View Solution Briefs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
