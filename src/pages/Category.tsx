import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { ProductGrid } from "@/components/ProductGrid";

const categoryNames: Record<string, string> = {
  sarees: "Sarees",
  dresses: "Dresses",
  girls: "Girls",
  boys: "Boys",
  family: "Family Outfits",
};

const Category = () => {
  const { category } = useParams();
  const categoryName = categoryNames[category || ""] || "Products";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          {categoryName}
        </h1>
        <ProductGrid category={category} />
      </main>
    </div>
  );
};

export default Category;
