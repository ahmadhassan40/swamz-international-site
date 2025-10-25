import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-muted/30 px-4">
      <div className="max-w-md rounded-2xl border border-border bg-card p-10 text-center shadow-lg">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <span className="text-2xl font-heading">404</span>
        </div>
        <h1 className="mt-6 font-heading text-3xl font-bold text-foreground">Page not found</h1>
        <p className="mt-4 text-muted-foreground">
          We looked everywhere for <span className="text-foreground font-medium">{location.pathname}</span>, but it seems to have moved or never existed.
        </p>
        <div className="mt-8 flex justify-center">
          <Link to="/">
            <Button variant="default" size="lg">
              <Home className="mr-2 h-4 w-4" />
              Back to homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
