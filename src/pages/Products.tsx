import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import products from "@/data/products.json";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [nicheFilter, setNicheFilter] = useState<string>("all");

  useEffect(() => {
    const nicheParam = searchParams.get("niche");
    if (nicheParam === "textiles" || nicheParam === "machineries" || nicheParam === "all") {
      setNicheFilter(nicheParam ?? "all");
    }

    const queryParam = searchParams.get("q");
    if (queryParam !== null) {
      setSearchTerm(queryParam);
    }
  }, [searchParams]);

  const updateQueryParams = (nextSearch: string, nextNiche: string) => {
    const nextParams = new URLSearchParams();

    if (nextSearch.trim().length > 0) {
      nextParams.set("q", nextSearch.trim());
    }

    if (nextNiche !== "all") {
      nextParams.set("niche", nextNiche);
    }

    setSearchParams(nextParams, { replace: true });
  };

  const filteredProducts = products.filter((product) => {
    const lowerSearch = searchTerm.toLowerCase();
    const matchesSearch =
      product.name.toLowerCase().includes(lowerSearch) ||
      product.shortDescription.toLowerCase().includes(lowerSearch);
    const matchesNiche = nicheFilter === "all" || product.niche === nicheFilter;
    return matchesSearch && matchesNiche;
  });

  return (
    <div className="min-h-screen pt-20 pb-36">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4 text-foreground">
            Product Catalog
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl">
            Browse our complete range of industrial protection and machinery solutions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(event) => {
                const value = event.target.value;
                setSearchTerm(value);
                updateQueryParams(value, nicheFilter);
              }}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={nicheFilter === "all" ? "default" : "outline"}
              onClick={() => {
                setNicheFilter("all");
                updateQueryParams(searchTerm, "all");
              }}
              aria-pressed={nicheFilter === "all"}
            >
              All
            </Button>
            <Button
              variant={nicheFilter === "textiles" ? "default" : "outline"}
              onClick={() => {
                setNicheFilter("textiles");
                updateQueryParams(searchTerm, "textiles");
              }}
              aria-pressed={nicheFilter === "textiles"}
            >
              Textiles
            </Button>
            <Button
              variant={nicheFilter === "machineries" ? "default" : "outline"}
              onClick={() => {
                setNicheFilter("machineries");
                updateQueryParams(searchTerm, "machineries");
              }}
              aria-pressed={nicheFilter === "machineries"}
            >
              Machineries
            </Button>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-border/70 bg-muted/20 p-12 text-center">
            <h2 className="font-heading text-2xl font-semibold text-foreground">No products found</h2>
            <p className="mt-3 text-muted-foreground">
              Try adjusting your search terms or filter to explore more of our catalogue.
            </p>
            <Button
              className="mt-6"
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setNicheFilter("all");
                updateQueryParams("", "all");
              }}
            >
              Reset filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
