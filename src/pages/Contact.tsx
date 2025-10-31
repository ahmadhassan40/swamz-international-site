import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, hasFirebaseConfig } from "@/lib/firebase";

const Contact = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    requirements: "",
  });

  const handleChange = (field: keyof typeof formData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;

    if (!db) {
      toast({
        variant: "destructive",
        title: "Submission unavailable",
        description: "Online quote capture is temporarily disabled. Please email info@swamz-international.com.",
      });
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        name: formData.name.trim(),
        company: formData.company.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        country: formData.country.trim(),
        requirements: formData.requirements.trim(),
        createdAt: serverTimestamp(),
        source: "contact_page",
      };

      await addDoc(collection(db, "quotes"), payload);

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        country: "",
        requirements: "",
      });

      toast({
        title: "Quote request sent",
        description: "Thanks! Our team will reach out shortly.",
      });
    } catch (error) {
      console.error("Failed to submit quote request", error);
      toast({
        variant: "destructive",
        title: "Submission failed",
        description: "Please retry or contact us directly.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(217,119,6,0.15),transparent_60%),_linear-gradient(180deg,rgba(255,252,243,1)_0%,rgba(250,244,230,1)_65%,rgba(255,255,255,1)_100%)] pt-24 pb-32">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-32 -right-24 h-[32rem] w-[32rem] rounded-full blur-3xl opacity-60 bg-[radial-gradient(circle_at_center,rgba(146,64,14,0.55),transparent_60%)] animate-[pulse-glow_18s_ease-in-out_infinite]"
          />
          <div
            className="absolute -bottom-40 -left-24 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-50 bg-[radial-gradient(circle_at_center,rgba(253,186,116,0.45),transparent_60%)] animate-[pulse-glow_20s_ease-in-out_infinite]"
            style={{ animationDelay: "1.4s" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0)_0%,rgba(217,119,6,0.12)_48%,rgba(250,204,21,0.12)_100%)]" />
        </div>
        <div className="container relative z-10 mx-auto px-4 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">Let’s start a conversation</h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              Whether you’re looking for a tailored PPE program, precision engine tooling, or automation support, our team is ready to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_center,_rgba(217,119,6,0.08),transparent_60%),_linear-gradient(180deg,rgba(255,252,243,1)_0%,rgba(250,242,229,1)_100%)] py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(217,119,6,0.12)_0%,rgba(250,204,21,0.1)_100%)] opacity-55" />
        </div>
        <div className="container relative z-10 mx-auto px-4 max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-primary/20 bg-white/95 backdrop-blur-xl shadow-[0_28px_65px_-40px_rgba(146,64,14,0.55)]"
            >
              <CardContent className="p-8">
                <h2 className="font-heading text-2xl font-semibold text-foreground">Request a Quote</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Provide a few details and our specialists will contact you with tailored recommendations and pricing.
                </p>
                {!hasFirebaseConfig && (
                  <p className="mt-4 rounded-xl border border-dashed border-primary/30 bg-primary/5 p-4 text-sm text-primary">
                    Online submissions are temporarily disabled. Please email us directly at
                    <a className="ml-1 underline" href="mailto:info@swamz-international.com">
                      info@swamz-international.com
                    </a>
                    .
                  </p>
                )}
                <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Input
                      name="name"
                      placeholder="Your Name *"
                      required
                      value={formData.name}
                      onChange={handleChange("name")}
                      className="rounded-xl border-primary/20 bg-white/90 text-black"
                    />
                    <Input
                      name="company"
                      placeholder="Company Name *"
                      required
                      value={formData.company}
                      onChange={handleChange("company")}
                      className="rounded-xl border-primary/20 bg-white/90 text-black"
                    />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address *"
                      required
                      value={formData.email}
                      onChange={handleChange("email")}
                      className="rounded-xl border-primary/20 bg-white/90 text-black"
                    />
                    <Input
                      name="phone"
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange("phone")}
                      className="rounded-xl border-primary/20 bg-white/90 text-black"
                    />
                  </div>
                  <Input
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleChange("country")}
                    className="rounded-xl border-primary/20 bg-white/90 text-black"
                  />
                  <Textarea
                    placeholder="Tell us about your requirements..."
                    rows={6}
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange("requirements")}
                    className="rounded-xl border-primary/20 bg-white/90 text-black"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full border-primary/30 bg-white text-black hover:bg-primary/10 hover:text-black"
                    variant="outline"
                    disabled={submitting || !db}
                  >
                    {submitting ? "Submitting..." : "Submit Request"}
                  </Button>
                </form>
              </CardContent>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="space-y-6"
            >
              {[{
                icon: Mail,
                title: "Email",
                items: ["info@swamz-international.com"],
              },
              {
                icon: Phone,
                title: "Phone",
                items: ["+92 333 8121288", "+92 334 8121288"],
              },
              {
                icon: MapPin,
                title: "Headquarters",
                items: ["Gujranwala, Pakistan"],
              }].map((contact) => (
                <Card key={contact.title} className="border border-primary/20 bg-white/95 backdrop-blur-xl shadow-[0_25px_55px_-40px_rgba(146,64,14,0.5)]">
                  <CardContent className="flex items-start gap-4 p-6">
                    <contact.icon className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-foreground">{contact.title}</h3>
                      <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                        {contact.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue via-brand-blue/90 to-teal" />
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-24 left-1/3 h-60 w-60 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35),transparent_60%)] blur-3xl opacity-60 animate-[pulse-glow_22s_ease-in-out_infinite]"
          />
          <div
            className="absolute -bottom-28 right-1/4 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(253,186,116,0.42),transparent_60%)] blur-3xl opacity-50 animate-[float-soft_26s_ease-in-out_infinite]"
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
            <h2 className="font-heading text-3xl font-bold md:text-4xl">Prefer to talk directly?</h2>
            <p className="mt-4 text-lg text-white/85">
              Schedule a strategy call with our leadership team to discuss long-term partnership models and performance KPIs.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/80 bg-white text-black hover:bg-white/90"
                >
                  Book a call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/downloads">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/70 bg-white text-black hover:bg-white/85"
                >
                  Download brochures
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
