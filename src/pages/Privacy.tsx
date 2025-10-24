import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Information we collect",
    body:
      "We collect contact information, company details, and project requirements submitted through forms or direct correspondence. Website analytics help us understand content performance but are anonymised and aggregated.",
  },
  {
    title: "How we use your information",
    body:
      "Data is used to respond to enquiries, provide quotations, fulfil contractual obligations, and deliver marketing updates when consent is given. We do not sell personal information.",
  },
  {
    title: "Data retention",
    body:
      "Project and transactional records are retained for up to seven years to meet legal and quality audit requirements. Marketing preferences can be updated at any time by contacting our team.",
  },
  {
    title: "Your rights",
    body:
      "You may request access, correction, or deletion of your personal data. EU and UK residents can also object to processing and lodge a complaint with their supervisory authority.",
  },
];

const Privacy = () => {
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
            <Badge className="mb-4 mx-auto bg-secondary text-secondary-foreground">Privacy Policy</Badge>
            <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Protecting your data and trust
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground">
              This policy outlines how SWAMZ International collects, processes, and safeguards personal information.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Card className="border-border/70">
                  <CardContent className="p-6">
                    <h2 className="font-heading text-2xl font-semibold text-foreground">{section.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{section.body}</p>
                  </CardContent>
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
                <CardContent className="p-6">
                  <h2 className="font-heading text-2xl font-semibold text-foreground">Contact us</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    For privacy enquiries, contact <span className="text-primary">privacy@swamz-international.com</span> or write to our compliance office in Dubai, UAE.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
