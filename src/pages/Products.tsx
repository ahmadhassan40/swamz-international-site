import { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import products from "@/data/products.json";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [nicheFilter, setNicheFilter] = useState<string>("all");

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesNiche = nicheFilter === "all" || product.niche === nicheFilter;
    return matchesSearch && matchesNiche;
  });

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="font-heading font-bold text-4xl mb-4 text-foreground">Product Catalog</h1>
          <p className="text-muted-foreground">Browse our complete range of industrial protection and machinery solutions.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button variant={nicheFilter === "all" ? "default" : "outline"} onClick={() => setNicheFilter("all")}>All</Button>
            <Button variant={nicheFilter === "textiles" ? "default" : "outline"} onClick={() => setNicheFilter("textiles")}>Textiles</Button>
            <Button variant={nicheFilter === "machineries" ? "default" : "outline"} onClick={() => setNicheFilter("machineries")}>Machineries</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
