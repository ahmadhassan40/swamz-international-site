import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const clauses = [
  {
    title: "1. Acceptance of terms",
    body:
      "By accessing SWAMZ International digital platforms or engaging our services, you agree to these terms and any referenced policies.",
  },
  {
    title: "2. Quotations & orders",
    body:
      "Quotes remain valid for 30 days unless otherwise stated. Purchase orders are subject to written confirmation and availability.",
  },
  {
    title: "3. Delivery & transfer of risk",
    body:
      "Incoterms specified in the quotation apply. Risk transfers upon delivery to the agreed carrier or customer facility.",
  },
  {
    title: "4. Warranty",
    body:
      "Products are warranted against manufacturing defects for 12 months from delivery. Remedies are limited to repair, replacement, or refund at our discretion.",
  },
  {
    title: "5. Limitation of liability",
    body:
      "SWAMZ International is not liable for indirect or consequential damages arising from the use of our products or services.",
  },
  {
    title: "6. Governing law",
    body:
      "These terms are governed by the laws of the United Arab Emirates. Disputes will be resolved through the Dubai International Arbitration Centre.",
  },
];

const Terms = () => {
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
            <Badge className="mb-4 mx-auto bg-accent/10 text-accent">Terms of Use</Badge>
            <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Commercial terms & conditions
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground">
              Review the key legal terms governing quotations, deliveries, warranties, and liabilities when working with SWAMZ International.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            {clauses.map((clause, index) => (
              <motion.div
                key={clause.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Card className="border-border/70">
                  <CardContent className="p-6">
                    <h2 className="font-heading text-2xl font-semibold text-foreground">{clause.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{clause.body}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
