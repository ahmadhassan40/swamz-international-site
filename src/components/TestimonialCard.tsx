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
      whileHover={{ translateY: -8 }}
    >
      <Card className="relative h-full overflow-hidden border border-primary/15 bg-white/88 backdrop-blur-xl shadow-[0_25px_60px_-45px_rgba(146,64,14,0.5)] transition-all duration-300">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,119,6,0.18),transparent_65%)] opacity-70" />
        <CardContent className="relative z-10 p-6">
          <Quote className="h-8 w-8 text-primary mb-4 opacity-60" />
          <p className="text-foreground/90 mb-6 italic leading-relaxed">"{quote}"</p>
          <div className="rounded-xl border border-primary/10 bg-white/80 p-4">
            <p className="font-heading font-semibold text-foreground">{author}</p>
            <p className="text-xs uppercase tracking-wide text-primary/80 mb-1">{role}</p>
            <p className="text-sm text-primary font-medium">{company}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
