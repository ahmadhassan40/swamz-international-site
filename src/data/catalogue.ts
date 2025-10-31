import source from "../../catalogue_import.json";

type RawCategory = (typeof source)["categories"][number];
type RawProduct = RawCategory["products"][number];

const imageBasePath = "/catalogue/";
const KEYWORD_SPLIT_REGEX = new RegExp(
  `(?=\\b(?:Quality|Applications?|Size|Material|Cotton|Rugged|Ribbed|Heat|Thickness|Coating|Gauge|Lining|Cuff|Protection|Compliance|Standards|CAT|CE|Length|Color|Weight|Finish|Insulation|Grip|Temperature|Voltage|Resistance)(?::|\\b))`,
  "g",
);

const normaliseWhitespace = (value: string) => value.replace(/\s+/g, " ").trim();

const summariseDescription = (description: string) => {
  const normalised = normaliseWhitespace(description);
  if (!normalised) {
    return {
      summary: "",
      highlights: [] as string[],
    };
  }

  const sentences = normalised.split(/(?<=\.)\s+/);
  const [firstSentence, ...restSentences] = sentences;

  const keywordSegments = normalised
    .split(KEYWORD_SPLIT_REGEX)
    .map((segment) => segment.trim())
    .filter(Boolean);

  const highlightsSource = restSentences.length > 0 ? restSentences : keywordSegments.slice(1);
  const uniqueHighlights = Array.from(new Set(highlightsSource.filter(Boolean))).slice(0, 6);

  return {
    summary: firstSentence ?? normalised,
    highlights: uniqueHighlights,
  };
};

export type CatalogueProduct = {
  sku: string;
  name: string;
  slug: string;
  description: string;
  summary: string;
  highlights: string[];
  imageFiles: string[];
  imageUrls: string[];
};

export type CatalogueCategory = {
  name: string;
  slug: string;
  products: CatalogueProduct[];
};

const mapProduct = (product: RawProduct): CatalogueProduct => {
  const description = normaliseWhitespace(product.description ?? "");
  const imageFiles = product.imageFiles ?? [];
  const imageUrls = imageFiles.map((file) => `${imageBasePath}${file}`);
  const { summary, highlights } = summariseDescription(description);

  return {
    sku: product.sku,
    name: product.name,
    slug: product.slug,
    description,
    summary,
    highlights,
    imageFiles,
    imageUrls,
  };
};

export const catalogueCategories: CatalogueCategory[] = source.categories.map((category) => ({
  name: category.categoryName,
  slug: category.categorySlug,
  products: (category.products ?? []).map(mapProduct),
}));

export type CatalogueInventoryProduct = CatalogueProduct & {
  categoryName: string;
  categorySlug: string;
};

export const catalogueProducts: CatalogueInventoryProduct[] = catalogueCategories.flatMap((category) =>
  category.products.map((product) => ({
    ...product,
    categoryName: category.name,
    categorySlug: category.slug,
  })),
);
