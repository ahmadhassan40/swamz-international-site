import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, Download, FileText, Shield } from "lucide-react";
import { motion } from "framer-motion";

const documents = [
  {
    id: "glove-catalogue",
    title: "Protective Gloves Master Catalogue",
    description: "Comprehensive overview of cut-resistant, chemical, heat, and specialty glove ranges.",
    type: "Catalog",
    size: "18 MB",
    link: "/downloads/glove-master-catalogue.pdf",
  },
  {
    id: "machinery-portfolio",
    title: "Engine Machinery Portfolio",
    description: "Line-up of CNC honing, crankshaft grinding, torque tools, and diagnostic benches.",
    type: "Product Portfolio",
    size: "22 MB",
    link: "/downloads/machinery-portfolio.pdf",
  },
  {
    id: "compliance-pack",
    title: "Compliance Certificate Pack",
    description: "ISO 9001, CE, EN standards, and test reports for commonly requested products.",
    type: "Certification",
    size: "9 MB",
    link: "/downloads/compliance-pack.zip",
  },
];

const Downloads = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-background via-muted/20 to-background pt-20 pb-36">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Badge className="mb-4 mx-auto bg-primary/10 text-primary">Downloads</Badge>
            <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Technical resources at your fingertips
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground">
              Access product catalogues, compliance certificates, and technical datasheets curated by the SWAMZ team.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 lg:grid-cols-2">
            {documents.map((doc, index) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Card className="h-full border-border/70">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <FileText className="h-6 w-6 text-primary" />
                      <h3 className="font-heading text-xl font-semibold text-foreground">{doc.title}</h3>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{doc.description}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <Badge variant="outline" className="text-xs uppercase">
                        {doc.type}
                      </Badge>
                      <span>Size: {doc.size}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-border/60 bg-muted/20 p-6">
                    <Button variant="outline" className="w-full" asChild>
                      <a href={doc.link} download>
                        Download
                        <Download className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border-primary/40 bg-primary/10">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 text-primary">
                    <Shield className="h-6 w-6" />
                    <h3 className="font-heading text-xl font-semibold text-foreground">Need something bespoke?</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Request CAD drawings, test reports, or compliance letters tailor-made for your audit requirements. Our documentation team will respond within one business day.
                  </p>
                  <Button variant="hero" className="mt-6 w-full">
                    Request documents
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Downloads;
