import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  role: string;
}

export const TestimonialCard = ({ quote, author, company, role }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full">
        <CardContent className="p-6">
          <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />
          <p className="text-foreground/90 mb-6 italic leading-relaxed">"{quote}"</p>
          <div className="border-t border-border pt-4">
            <p className="font-heading font-semibold text-foreground">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
            <p className="text-sm text-primary font-medium">{company}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
