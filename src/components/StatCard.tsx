import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  delay?: number;
}

export const StatCard = ({ icon: Icon, value, label, delay = 0 }: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
    >
      <Card className="relative overflow-hidden text-center border border-white/20 bg-white/10 backdrop-blur-xl transition-all duration-300 hover:border-primary/40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,119,6,0.25),transparent_70%)] opacity-60" />
        <CardContent className="relative z-10 p-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/15 mb-4">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div className="font-heading font-bold text-3xl text-white mb-1">{value}</div>
          <p className="text-sm text-gray-200/90">{label}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};
