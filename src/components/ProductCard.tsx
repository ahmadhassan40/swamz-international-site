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
  };
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const fallbackImage =
    product.niche === "machineries" ? "/media/placeholder-machinery.svg" : "/media/placeholder-gloves.svg";
  const primaryImage = product.images?.[0] ?? fallbackImage;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48 overflow-hidden">
          <img
            src={primaryImage}
            alt={product.name}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.src = fallbackImage;
            }}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground shadow-md">
            {product.category}
          </Badge>
        </div>
        
        <CardContent className="flex-grow p-4">
          <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {product.shortDescription}
          </p>
          
          <div className="flex flex-wrap gap-1 mb-3">
            {product.standards.slice(0, 2).map((standard, idx) => (
              <Badge key={idx} variant="outline" className="text-xs">
                <Shield className="h-3 w-3 mr-1" />
                {standard}
              </Badge>
            ))}
            {product.standards.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{product.standards.length - 2} more
              </Badge>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-0">
          <Link to={`/products/${product.id}`} className="w-full">
            <Button variant="outline" className="w-full group/btn">
              View Details
              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
