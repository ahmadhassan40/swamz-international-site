import { useState, useEffect, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Layout = ({ children }: { children: ReactNode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
    }
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem("theme", "light");
      } catch (error) {
        console.warn("Unable to persist theme preference:", error);
      }
    }
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Textiles", href: "/textiles" },
    { name: "Machineries", href: "/machineries" },
    { name: "Products", href: "/products" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <span className="relative inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-transparent bg-transparent">
                <img
                  src="/images/swamz_logo_new.png"
                  alt="SWAMZ emblem"
                  className="h-full w-full object-contain drop-shadow-[0_12px_25px_rgba(146,64,14,0.45)]"
                />
              </span>
              <div className="hidden sm:flex flex-col leading-none">
                <span className="font-heading text-xl font-semibold tracking-wide text-foreground">SWAMZ</span>
                <span className="text-xs font-medium uppercase tracking-[0.26em] text-primary/80">International</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-foreground/70 hover:text-foreground hover:bg-accent/50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-2">
              <Link to="/contact" className="hidden md:block">
                <Button variant="default" size="sm">Request Quote</Button>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border">
              <nav className="flex flex-col space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === item.href
                        ? "text-primary bg-primary/10"
                        : "text-foreground/70 hover:text-foreground hover:bg-accent/50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="pt-2">
                  <Button variant="default" size="sm" className="w-full">Request Quote</Button>
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-16 md:pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-navy text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="mb-4 inline-flex items-center space-x-4">
                <span className="relative inline-flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-transparent bg-transparent">
                  <img
                    src="/images/swamz_logo_new.png"
                    alt="SWAMZ emblem"
                    className="h-full w-full object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.55)]"
                  />
                </span>
                <div className="flex flex-col leading-none">
                  <span className="font-heading text-2xl font-semibold tracking-wide text-white">SWAMZ</span>
                  <span className="text-xs font-medium uppercase tracking-[0.26em] text-primary/80">International</span>
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-4">
                Leading B2B supplier of industrial protective gloves and precision engine machinery. 
                Trusted globally for quality, compliance, and reliability.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">YouTube</a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/textiles" className="text-gray-300 hover:text-white transition-colors">Textiles</Link></li>
                <li><Link to="/machineries" className="text-gray-300 hover:text-white transition-colors">Machineries</Link></li>
                <li><Link to="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link></li>
                <li><Link to="/case-studies" className="text-gray-300 hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link to="/quality" className="text-gray-300 hover:text-white transition-colors">Quality & Certifications</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-heading font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/downloads" className="text-gray-300 hover:text-white transition-colors">Downloads</Link></li>
                <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start space-x-2">
                  <Mail className="h-4 w-4 mt-0.5 text-teal" />
                  <div>
                    <a href="mailto:info@swamz-international.com" className="text-gray-300 hover:text-white transition-colors">
                      info@swamz-international.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-2">
                  <Phone className="h-4 w-4 mt-0.5 text-teal" />
                  <div>
                    <p className="text-gray-300">+971 4 123 4567 (Middle East)</p>
                    <p className="text-gray-300">+86 21 5123 4567 (Asia Pacific)</p>
                  </div>
                </li>
              </ul>
              <div className="mt-4">
                <Link to="/contact">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/20 bg-white text-black hover:bg-white/90 hover:text-black"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2025 SWAMZ International. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
