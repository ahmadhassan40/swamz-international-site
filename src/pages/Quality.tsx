import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, FileText, Microscope, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const certifications = [
  {
    title: "ISO 9001",
    description: "Quality management system in place across manufacturing and distribution centres.",
  },
  {
    title: "CE & EN Compliance",
    description: "Conformity assessment for PPE and machinery aligned with European directives.",
  },
  {
    title: "ANSI / ASTM",
    description: "North American standards for cut resistance, chemical performance, and mechanical testing.",
  },
  {
    title: "IATF 16949",
    description: "Automotive quality management for OEM and tier suppliers.",
  },
];

const labCapabilities = [
  "Cut resistance (EN388, ANSI/ISEA 105) with full reporting",
  "Chemical permeation and degradation analysis",
  "Thermal resistance and arc flash testing",
  "Torque tool calibration up to 4000 Nm",
  "Dimensional verification using CMM and laser measurement",
];

const Quality = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-background via-muted/20 to-background pt-20 pb-36">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto text-center"
            >
              <Badge className="mb-4 mx-auto bg-primary/10 text-primary">Quality & Compliance</Badge>
              <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
                Certified quality. Traceable performance.
              </h1>
              <p className="mt-5 text-lg md:text-xl text-muted-foreground">
                SWAMZ International operates accredited laboratories and quality systems ensuring every glove and machinery component meets the highest regulatory standards.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Badge variant="secondary" className="bg-primary/15 text-primary">
                  Third-party audited annually
                </Badge>
                <Badge variant="secondary" className="bg-accent/15 text-accent">
                  Certificates supplied with every shipment
                </Badge>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/downloads">
                  <Button variant="hero">
                    Download certificates
                    <FileText className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline">Request audit pack</Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-3xl border border-border/60 shadow-xl"
            >
              <img src="/media/placeholder-lab.svg" alt="SWAMZ quality laboratory" className="h-full w-full object-cover" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
              >
                <Card className="h-full border-border/70">
                  <CardContent className="flex h-full flex-col gap-4 p-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">{cert.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{cert.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-accent/40 bg-accent/10 p-8"
            >
              <div className="flex items-center gap-3 text-accent">
                <Microscope className="h-6 w-6" />
                <h3 className="font-heading text-2xl font-semibold text-foreground">
                  In-house laboratory capabilities
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Our accredited labs operate across glove and machinery disciplines, providing test data for every project stage.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-foreground">
                {labCapabilities.map((capability) => (
                  <li key={capability} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-muted-foreground">{capability}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl border border-primary/40 bg-primary/10 p-8"
            >
              <h3 className="font-heading text-2xl font-semibold text-foreground">Quality assurance process</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Every order follows a defined QA workflow from supplier onboarding to final inspection.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {["Supplier qualification", "Incoming inspection", "Process validation", "Pre-shipment verification"].map((step) => (
                  <div key={step} className="rounded-lg border border-border/60 bg-background/80 p-4 text-sm text-muted-foreground">
                    {step}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quality;
