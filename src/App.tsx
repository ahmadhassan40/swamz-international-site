import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Textiles from "./pages/Textiles";
import Machineries from "./pages/Machineries";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
<<<<<<< HEAD
=======
import CaseStudies from "./pages/CaseStudies";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Quality from "./pages/Quality";
import Blog from "./pages/Blog";
import Downloads from "./pages/Downloads";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import ProductDetail from "./pages/ProductDetail";
>>>>>>> 0394b2b (Align hero layout and section spacing)

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/textiles" element={<Textiles />} />
            <Route path="/machineries" element={<Machineries />} />
            <Route path="/products" element={<Products />} />
<<<<<<< HEAD
            <Route path="/contact" element={<Contact />} />
=======
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
>>>>>>> 0394b2b (Align hero layout and section spacing)
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
