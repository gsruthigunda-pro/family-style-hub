import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative bg-gradient-hero py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Discover Your Perfect Style
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            From elegant sarees to trendy outfits for the whole family. 
            Shop the latest fashion collections for everyone you love.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/products">
              <Button size="lg" className="gap-2">
                Shop Now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/category/family">
              <Button size="lg" variant="outline">
                Family Collections
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
