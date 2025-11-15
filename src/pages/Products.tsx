import { Header } from "@/components/Header";
import { ProductGrid } from "@/components/ProductGrid";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          All Products
        </h1>
        <ProductGrid />
      </main>
    </div>
  );
};

export default Products;
