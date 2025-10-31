import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, Shield } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: {
    id: string;
    sku: string;
    name: string;
    niche: string;
    category: string;
    shortDescription: string;
    standards: string[];
    images: string[];
    catalogueText?: string;
  };
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const fallbackImage =
    product.niche === "machineries" ? "/media/placeholder-machinery.svg" : "/media/placeholder-gloves.svg";
  const primaryImage = product.images?.[0] ?? fallbackImage;
  const isCatalogueItem = product.id.startsWith("catalog-");
  const ctaHref = isCatalogueItem ? `/contact?product=${encodeURIComponent(product.sku)}` : `/products/${product.id}`;
  const ctaLabel = isCatalogueItem ? "Request Quote" : "View Details";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Card className="relative h-full flex flex-col overflow-hidden group border border-primary/10 bg-white/95 backdrop-blur-sm shadow-[0_22px_45px_-35px_rgba(146,64,14,0.35)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_32px_70px_-30px_rgba(146,64,14,0.45)]">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(217,119,6,0.08)_0%,rgba(253,186,116,0.06)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10 h-48 overflow-hidden">
          <img
            src={primaryImage}
            alt={product.name}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.src = fallbackImage;
            }}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <Badge className="absolute top-2 right-2 bg-primary/95 text-primary-foreground shadow-[0_10px_30px_-12px_rgba(146,64,14,0.45)]">
            {product.category}
          </Badge>
        </div>

        <CardContent className="relative z-10 flex-grow p-4">
          <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {product.shortDescription}
          </p>

          <div className="flex flex-wrap gap-1 mb-3">
            {product.standards.slice(0, 2).map((standard, idx) => (
              <Badge key={idx} variant="outline" className="text-xs border-primary/30 text-foreground/80">
                <Shield className="h-3 w-3 mr-1" />
                {standard}
              </Badge>
            ))}
            {product.standards.length > 2 && (
              <Badge variant="outline" className="text-xs border-primary/30 text-foreground/70">
                +{product.standards.length - 2} more
              </Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="relative z-10 p-4 pt-0">
          <Link to={ctaHref} className="w-full">
            <Button
              variant="outline"
              className="w-full border-primary/40 text-primary hover:bg-primary/10 hover:text-primary shadow-[0_18px_30px_-25px_rgba(146,64,14,0.45)] group/btn"
            >
              {ctaLabel}
              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
