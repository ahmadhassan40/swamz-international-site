import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Sparkles } from "lucide-react";
import products from "@/data/products.json";

const filterTabs = [
  { label: "All", value: "all" },
  { label: "Industrial Textiles", value: "textiles" },
  { label: "Engine Machineries", value: "machineries" },
];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [nicheFilter, setNicheFilter] = useState<string>("all");

  useEffect(() => {
    const nicheParam = searchParams.get("niche");
    if (nicheParam && filterTabs.some((tab) => tab.value === nicheParam)) {
      setNicheFilter(nicheParam);
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

  const filteredProducts = useMemo(() => {
    const lowerSearch = searchTerm.toLowerCase();
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(lowerSearch) ||
        product.shortDescription.toLowerCase().includes(lowerSearch) ||
        product.category.toLowerCase().includes(lowerSearch);
      const matchesNiche = nicheFilter === "all" || product.niche === nicheFilter;
      return matchesSearch && matchesNiche;
    });
  }, [searchTerm, nicheFilter]);

  const totalCounts = useMemo(() => {
    return filterTabs.reduce<Record<string, number>>((acc, tab) => {
      acc[tab.value] =
        tab.value === "all"
          ? products.length
          : products.filter((product) => product.niche === tab.value).length;
      return acc;
    }, {});
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero & Filters */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(217,119,6,0.15),transparent_60%),_linear-gradient(180deg,rgba(255,252,243,1)_0%,rgba(250,244,230,1)_60%,rgba(255,255,255,1)_100%)] pt-24 pb-32">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-32 -right-24 h-[32rem] w-[32rem] rounded-full blur-3xl opacity-60 bg-[radial-gradient(circle_at_center,rgba(146,64,14,0.55),transparent_60%)] animate-[pulse-glow_18s_ease-in-out_infinite]"
          />
          <div
            className="absolute -bottom-36 -left-24 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-50 bg-[radial-gradient(circle_at_center,rgba(253,186,116,0.45),transparent_60%)] animate-[pulse-glow_20s_ease-in-out_infinite]"
            style={{ animationDelay: "1.3s" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0)_0%,rgba(217,119,6,0.12)_48%,rgba(250,204,21,0.12)_100%)]" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <Badge className="mb-4 mx-auto bg-primary/12 text-primary border-primary/20">Product Portfolio</Badge>
            <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Industrial Protection &amp; Engine Machinery
            </h1>
            <p className="mx-auto mt-4 text-lg text-muted-foreground md:text-xl">
              Discover textiles engineered for safety and machinery built for precision—all curated for heavy industry
              performance and compliance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="mx-auto mt-10 max-w-4xl rounded-3xl border border-white/60 bg-white/80 backdrop-blur-2xl shadow-[0_25px_80px_-35px_rgba(146,64,14,0.55)]"
          >
            <div className="grid gap-4 p-6 md:grid-cols-[1.3fr_0.7fr] md:p-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search products, categories, or capabilities..."
                  value={searchTerm}
                  onChange={(event) => {
                    const value = event.target.value;
                    setSearchTerm(value);
                    updateQueryParams(value, nicheFilter);
                  }}
                  className="h-12 rounded-xl border-primary/20 bg-white/90 pl-12 text-black"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-2 md:justify-end">
                {filterTabs.map((tab) => {
                  const isActive = nicheFilter === tab.value;
                  return (
                    <Button
                      key={tab.value}
                      variant="outline"
                      className={`rounded-xl border-primary/30 bg-white text-black transition-all hover:bg-primary/10 hover:text-black ${
                        isActive ? "shadow-[0_18px_45px_-28px_rgba(146,64,14,0.55)]" : "shadow-none"
                      }`}
                      onClick={() => {
                        setNicheFilter(tab.value);
                        updateQueryParams(searchTerm, tab.value);
                      }}
                      aria-pressed={isActive}
                    >
                      {tab.label}
                      <Badge className="ml-2 bg-primary/10 text-primary" variant="secondary">
                        {totalCounts[tab.value]}
                      </Badge>
                    </Button>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-primary/15 bg-white/70 px-6 py-4 text-sm text-muted-foreground/90 md:px-8">
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                Showing {filteredProducts.length} of {products.length} catalog items
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_center,_rgba(217,119,6,0.08),transparent_60%),_linear-gradient(180deg,rgba(255,252,243,1)_0%,rgba(250,242,229,1)_100%)] py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(217,119,6,0.12)_0%,rgba(250,204,21,0.1)_100%)] opacity-55" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto max-w-3xl rounded-3xl border border-dashed border-primary/30 bg-white/85 py-12 px-10 text-center shadow-[0_25px_60px_-45px_rgba(146,64,14,0.5)]"
            >
              <h2 className="font-heading text-2xl font-semibold text-foreground">No products found</h2>
              <p className="mt-3 text-muted-foreground">
                Try adjusting your search terms or filter to explore more of our catalog.
              </p>
              <Button
                className="mt-6 border-primary/30 bg-white text-black hover:bg-primary/10 hover:text-black"
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setNicheFilter("all");
                  updateQueryParams("", "all");
                }}
              >
                Reset filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue/90 to-teal" />
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-24 left-1/3 w-60 h-60 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35),transparent_60%)] blur-3xl opacity-60 animate-[pulse-glow_22s_ease-in-out_infinite]"
          />
          <div
            className="absolute -bottom-28 right-1/4 w-72 h-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(253,186,116,0.42),transparent_60%)] blur-3xl opacity-50 animate-[float-soft_26s_ease-in-out_infinite]"
            style={{ animationDelay: "1.4s" }}
          />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl font-bold md:text-4xl">Need a Curated Solution?</h2>
            <p className="mt-4 text-lg text-white/85">
              Our engineers can assemble a bespoke package of textiles and machinery tailored to your throughput and
              compliance goals.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/downloads">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/80 bg-white text-black hover:bg-white/90"
                >
                  Download Catalog
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/70 bg-white text-black hover:bg-white/85"
                >
                  Book Strategy Call
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
