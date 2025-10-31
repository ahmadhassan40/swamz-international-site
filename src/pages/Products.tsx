import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Sparkles } from "lucide-react";
import {
  catalogueCategories,
  catalogueProducts,
  type CatalogueInventoryProduct,
} from "@/data/catalogue";

type FilterOption = {
  value: string;
  label: string;
};

const fallbackCategoryLabel = "All Categories";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const filterOptions = useMemo<FilterOption[]>(
    () => [
      { value: "all", label: fallbackCategoryLabel },
      ...catalogueCategories.map((category) => ({
        value: category.slug,
        label: category.name,
      })),
    ],
    [],
  );

  const countsMap = useMemo<Record<string, number>>(() => {
    const map: Record<string, number> = { all: catalogueProducts.length };
    catalogueCategories.forEach((category) => {
      map[category.slug] = category.products.length;
    });
    return map;
  }, []);

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      const validCategory =
        categoryParam === "all" || filterOptions.some((option) => option.value === categoryParam);
      if (validCategory) {
        setCategoryFilter(categoryParam);
      }
    }

    const queryParam = searchParams.get("q");
    if (queryParam !== null) {
      setSearchTerm(queryParam);
    }
  }, [searchParams, filterOptions]);

  const updateQueryParams = (nextSearch: string, nextCategory: string) => {
    const nextParams = new URLSearchParams();

    if (nextSearch.trim().length > 0) {
      nextParams.set("q", nextSearch.trim());
    }

    if (nextCategory !== "all") {
      nextParams.set("category", nextCategory);
    }

    setSearchParams(nextParams, { replace: true });
  };

  const normalizedSearch = searchTerm.trim().toLowerCase();

  const matchesSearch = useCallback(
    (product: CatalogueInventoryProduct) => {
      if (!normalizedSearch) return true;
      const haystacks = [
        product.name,
        product.summary,
        product.description,
        product.sku,
        product.categoryName,
      ]
        .filter(Boolean)
        .map((value) => value.toLowerCase());

      return haystacks.some((value) => value.includes(normalizedSearch));
    },
    [normalizedSearch],
  );

  const filteredProducts = useMemo(() => {
    return catalogueProducts.filter((product) => {
      const matchesCategory = categoryFilter === "all" || product.categorySlug === categoryFilter;
      return matchesCategory && matchesSearch(product);
    });
  }, [categoryFilter, matchesSearch]);

  const groupedCategories = useMemo(() => {
    return catalogueCategories
      .filter((category) => categoryFilter === "all" || category.slug === categoryFilter)
      .map((category) => ({
        name: category.name,
        slug: category.slug,
        products: filteredProducts.filter((product) => product.categorySlug === category.slug),
      }))
      .filter((group) => group.products.length > 0);
  }, [categoryFilter, filteredProducts]);

  const totalMatches = filteredProducts.length;
  const totalInScope = countsMap[categoryFilter] ?? countsMap.all;
  const hasResults = groupedCategories.length > 0;

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
            <Badge className="mb-4 mx-auto bg-primary/12 text-primary border-primary/20">Protective Gloves Catalogue</Badge>
            <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Industrial Hand Protection Portfolio
            </h1>
            <p className="mx-auto mt-4 text-lg text-muted-foreground md:text-xl">
              Explore the complete SWAMZ glove range—organised by application and engineered for compliance, comfort, and
              durability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="mx-auto mt-10 max-w-4xl rounded-3xl border border-primary/10 bg-white/90 backdrop-blur-2xl shadow-[0_25px_65px_-40px_rgba(146,64,14,0.55)]"
          >
            <div className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:gap-6 md:p-8">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search by SKU, application, or material..."
                  value={searchTerm}
                  onChange={(event) => {
                    const value = event.target.value;
                    setSearchTerm(value);
                    updateQueryParams(value, categoryFilter);
                  }}
                  className="h-12 rounded-xl border-primary/20 bg-white/95 pl-12 text-black shadow-sm"
                />
              </div>

              <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center md:w-auto">
                <Select
                  value={categoryFilter}
                  onValueChange={(value) => {
                    setCategoryFilter(value);
                    updateQueryParams(searchTerm, value);
                  }}
                >
                  <SelectTrigger className="h-12 min-w-[220px] rounded-xl border-primary/20 bg-white/95 text-left text-black shadow-sm">
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent align="end" className="min-w-[240px]">
                    {filterOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        <span className="flex items-center justify-between gap-4">
                          <span>{option.label}</span>
                          <span className="text-xs font-medium text-muted-foreground">
                            {countsMap[option.value] ?? 0}
                          </span>
                        </span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button
                  variant="ghost"
                  className="h-12 rounded-xl border border-transparent text-muted-foreground transition-colors hover:border-primary/20 hover:bg-primary/5 hover:text-primary"
                  onClick={() => {
                    setSearchTerm("");
                    setCategoryFilter("all");
                    updateQueryParams("", "all");
                  }}
                >
                  Reset filters
                </Button>
              </div>
            </div>

            <div className="border-t border-primary/10 bg-white/80 px-6 py-4 text-sm text-muted-foreground md:px-8">
              <div className="flex flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center justify-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Showing {totalMatches} of {totalInScope} catalogue products
                </div>
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground/80">
                  {categoryFilter === "all" ? fallbackCategoryLabel : filterOptions.find((option) => option.value === categoryFilter)?.label}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Catalogue Listing */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_center,_rgba(217,119,6,0.08),transparent_60%),_linear-gradient(180deg,rgba(255,252,243,1)_0%,rgba(250,242,229,1)_100%)] py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(217,119,6,0.12)_0%,rgba(250,204,21,0.1)_100%)] opacity-55" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          {hasResults ? (
            <div className="space-y-16">
              {groupedCategories.map((group, index) => (
                <motion.div
                  key={group.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                    <h2 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">{group.name}</h2>
                    <Badge className="w-fit bg-primary/10 text-primary" variant="secondary">
                      {group.products.length} styles
                    </Badge>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {group.products.map((product) => {
                      const contactHref = `/contact?product=${encodeURIComponent(product.sku)}`;
                      const primaryImage = product.imageUrls[0];
                      return (
                        <article
                          key={product.sku}
                          className="group flex h-full flex-col rounded-3xl border border-primary/15 bg-white/95 p-6 shadow-[0_18px_45px_-32px_rgba(146,64,14,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_-34px_rgba(146,64,14,0.55)]"
                        >
                          <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl border border-primary/10 bg-white p-3">
                            {primaryImage ? (
                              <img
                                src={primaryImage}
                                alt={product.name}
                                loading="lazy"
                                className="max-h-full max-w-full object-contain"
                                onError={(event) => {
                                  event.currentTarget.style.visibility = "hidden";
                                }}
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-wide text-muted-foreground">
                                Image coming soon
                              </div>
                            )}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-black/0 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                          </div>

                          <div className="mt-5 flex flex-1 flex-col gap-4">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="font-heading text-xl font-semibold text-foreground">
                                {product.name}
                              </h3>
                              <Badge variant="outline" className="border-primary/30 bg-white/80 text-primary">
                                {product.sku.replace(/^Art\s+/i, "")}
                              </Badge>
                            </div>
                            <p className="text-sm leading-relaxed text-muted-foreground">{product.summary}</p>
                            {product.highlights.length > 0 && (
                              <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                                {product.highlights.map((highlight) => (
                                  <li key={highlight} className="flex gap-2">
                                    <span
                                      aria-hidden
                                      className="mt-1 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"
                                    />
                                    <span>{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>

                          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground/80">
                              {product.categoryName}
                            </span>
                            <Link to={contactHref} className="w-full sm:w-auto">
                              <Button
                                variant="outline"
                                className="w-full border-primary/40 text-primary transition-colors hover:bg-primary/10 hover:text-primary"
                              >
                                Request Quote
                              </Button>
                            </Link>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto max-w-3xl rounded-3xl border border-dashed border-primary/30 bg-white/85 py-12 px-10 text-center shadow-[0_25px_60px_-45px_rgba(146,64,14,0.5)]"
            >
              <h2 className="font-heading text-2xl font-semibold text-foreground">No products found</h2>
              <p className="mt-3 text-muted-foreground">
                Try adjusting your search terms or category filter to explore more of our glove catalogue.
              </p>
              <Button
                className="mt-6 border-primary/30 bg-white text-black hover:bg-primary/10 hover:text-black"
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setCategoryFilter("all");
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
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="font-heading text-3xl font-bold md:text-4xl">Need tailored glove recommendations?</h2>
            <p className="mt-4 text-lg text-white/85">
              Share your safety requirements and our specialists will curate the right protection set—complete with sizing,
              certifications, and lead times.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
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
