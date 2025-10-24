import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const posts = [
  {
    id: "ppe-innovation",
    title: "How new yarn technologies are redefining cut resistance",
    excerpt:
      "Explore how ultra-high molecular weight polyethylene and aramid blends deliver higher protection with less bulk.",
    category: "Protective Textiles",
    image: "/media/placeholder-gloves.svg",
    date: "March 2025",
  },
  {
    id: "torque-control",
    title: "Torque auditing best practices for remanufactured engines",
    excerpt:
      "Set up traceable torque verification workflows that satisfy OEM specifications and insurance requirements.",
    category: "Machinery Insights",
    image: "/media/placeholder-machinery.svg",
    date: "February 2025",
  },
  {
    id: "compliance-roadmap",
    title: "Building a global PPE compliance roadmap",
    excerpt:
      "Learn how to harmonise regional standards and documentation across multi-country operations.",
    category: "Compliance",
    image: "/media/placeholder-blog.svg",
    date: "January 2025",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-background via-muted/25 to-background pt-20 pb-36">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Badge className="mb-4 mx-auto bg-secondary text-secondary-foreground">Insights</Badge>
            <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Ideas powering industrial excellence
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground">
              Guidance, best practices, and thought leadership from the SWAMZ International team.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <Card className="h-full overflow-hidden">
                  <div className="relative h-44">
                    <img src={post.image} alt={post.title} className="h-full w-full object-cover" loading="lazy" />
                    <Badge className="absolute left-4 top-4 bg-black/60 text-white backdrop-blur-md">
                      {post.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{post.date}</p>
                    <h3 className="mt-2 font-heading text-xl font-semibold text-foreground">{post.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="border-t border-border/60 bg-muted/20 p-6">
                    <Button variant="outline" className="w-full">
                      Read article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
