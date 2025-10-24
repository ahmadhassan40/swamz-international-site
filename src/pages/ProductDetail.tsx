import { useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import products from "@/data/products.json";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Download, Shield } from "lucide-react";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  const product = useMemo(() => products.find((item) => item.id === productId), [productId]);

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="font-heading text-3xl font-bold text-foreground">Product not found</h1>
        <p className="mt-3 max-w-md text-muted-foreground">
          The product you are looking for may have been updated or removed. Please explore our catalog for the latest range.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button variant="outline" onClick={() => navigate(-1)}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go back
          </Button>
          <Link to="/products">
            <Button variant="hero">Browse catalog</Button>
          </Link>
        </div>
      </div>
    );
  }

  const fallbackImage = product.niche === "machineries" ? "/media/placeholder-machinery.svg" : "/media/placeholder-gloves.svg";
  const primaryImage = product.images?.[0] ?? fallbackImage;
  const specEntries = Object.entries(product.specs ?? {});

  return (
    <div className="min-h-screen pt-20 pb-36">
      <div className="container mx-auto px-4">
        <Button variant="ghost" className="mb-6" onClick={() => navigate(-1)}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={primaryImage}
                  alt={product.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.src = fallbackImage;
                  }}
                />
                <Badge className="absolute left-4 top-4 bg-black/60 text-white backdrop-blur-md">
                  {product.category}
                </Badge>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {product.niche === "machineries" ? "Engine Machinery" : "Protective Textiles"}
                  </Badge>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">SKU: {product.sku}</span>
                </div>
                <h1 className="mt-4 font-heading text-3xl font-bold text-foreground">{product.name}</h1>
                <p className="mt-4 text-muted-foreground">{product.shortDescription}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.standards?.map((standard) => (
                    <Badge key={standard} variant="outline" className="text-xs">
                      <Shield className="mr-1 h-3 w-3" />
                      {standard}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="font-heading text-xl font-semibold text-foreground">Technical specifications</h2>
                <dl className="mt-4 space-y-3">
                  {specEntries.map(([label, value]) => (
                    <div key={label} className="flex flex-col gap-1 rounded-lg border border-border/70 bg-muted/10 p-3">
                      <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</dt>
                      <dd className="text-sm text-foreground">{value}</dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>

            {product.downloads?.length ? (
              <Card className="border-primary/40 bg-primary/10">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground">Downloads</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Access product datasheets, compliance reports, and manuals.
                  </p>
                  <div className="mt-4 space-y-3">
                    {product.downloads.map((download) => (
                      <Button key={download} variant="outline" className="w-full justify-between">
                        <span>{download.split("/").pop()}</span>
                        <Download className="h-4 w-4" />
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ) : null}

            {product.contactCTA ? (
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground">Need pricing or customisation?</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Our applications team can tailor this product to your environment and provide volume pricing.
                  </p>
                  <Link to="/contact">
                    <Button className="mt-4 w-full" variant="hero">
                      Talk to an expert
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
