import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="font-heading font-bold text-4xl mb-4 text-foreground">Get in Touch</h1>
          <p className="text-muted-foreground">Our team is ready to assist with your requirements.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-8">
              <h2 className="font-heading font-semibold text-2xl mb-6">Request a Quote</h2>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Your Name *" required />
                  <Input placeholder="Company Name *" required />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input type="email" placeholder="Email Address *" required />
                  <Input type="tel" placeholder="Phone Number" />
                </div>
                <Input placeholder="Country" />
                <Textarea placeholder="Tell us about your requirements..." rows={6} />
                <Button type="submit" className="w-full" size="lg">Submit Request</Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground">info@swamz-international.com</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-sm text-muted-foreground">+971 4 123 4567 (Middle East)</p>
                  <p className="text-sm text-muted-foreground">+86 21 5123 4567 (Asia Pacific)</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Headquarters</h3>
                  <p className="text-sm text-muted-foreground">Dubai, United Arab Emirates</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
