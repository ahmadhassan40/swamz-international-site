import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { CatalogueInventoryProduct } from "@/data/catalogue";

interface CatalogueCardProps {
  product: CatalogueInventoryProduct;
}

const gloveFallbackImage = "/media/placeholder-gloves.svg";

const sanitiseHighlights = (highlights: string[], summary: string) => {
  const trimmedSummary = summary.trim();
  return highlights
    .map((highlight) => highlight.trim())
    .filter((highlight) => highlight.length > 0 && highlight !== trimmedSummary);
};

export const CatalogueCard = ({ product }: CatalogueCardProps) => {
  const fallbackImage = gloveFallbackImage;
  const primaryImage = product.imageUrls[0] ?? fallbackImage;
  const highlights = sanitiseHighlights(product.highlights, product.summary);
  const contactHref = `/contact?product=${encodeURIComponent(product.sku)}`;

  return (
    <Card className="group relative flex h-full flex-col overflow-hidden border border-primary/10 bg-white/95 backdrop-blur-sm shadow-[0_22px_45px_-35px_rgba(146,64,14,0.35)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_32px_70px_-30px_rgba(146,64,14,0.45)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(217,119,6,0.08)_0%,rgba(253,186,116,0.06)_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
        <Badge className="absolute left-2 top-2 bg-primary/90 text-primary-foreground shadow-[0_10px_30px_-12px_rgba(146,64,14,0.45)]">
          {product.categoryName}
        </Badge>
      </div>

      <CardContent className="relative z-10 flex flex-grow flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <Badge variant="outline" className="whitespace-nowrap border-primary/30 text-primary">
            {product.sku}
          </Badge>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{product.summary}</p>

        {highlights.length > 0 && (
          <ul className="space-y-1 text-sm leading-relaxed text-muted-foreground">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2">
                <span aria-hidden className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>

      <CardFooter className="relative z-10 p-5 pt-0">
        <Link to={contactHref} className="w-full">
          <Button
            variant="outline"
            className="w-full border-primary/40 text-primary hover:bg-primary/10 hover:text-primary shadow-[0_18px_30px_-25px_rgba(146,64,14,0.45)] group"
          >
            Request Quote
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
