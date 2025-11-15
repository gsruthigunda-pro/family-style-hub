import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";

const categories = [
  { 
    name: "Sarees", 
    path: "/category/sarees",
    description: "Traditional elegance",
    icon: "👘"
  },
  { 
    name: "Dresses", 
    path: "/category/dresses",
    description: "Modern style",
    icon: "👗"
  },
  { 
    name: "Girls", 
    path: "/category/girls",
    description: "Cute & comfortable",
    icon: "👧"
  },
  { 
    name: "Boys", 
    path: "/category/boys",
    description: "Cool & casual",
    icon: "👦"
  },
  { 
    name: "Family Outfits", 
    path: "/category/family",
    description: "Matching sets",
    icon: "👨‍👩‍👧‍👦"
  },
];

export const CategoryGrid = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our curated collections for every member of your family
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link key={category.path} to={category.path}>
              <Card className="group hover:shadow-elevated transition-all duration-300 cursor-pointer overflow-hidden h-full">
                <div className="p-6 text-center bg-gradient-card h-full flex flex-col justify-center">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
