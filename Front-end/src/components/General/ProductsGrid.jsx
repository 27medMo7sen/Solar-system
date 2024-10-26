import { products } from "../../Data";
import { ProductCard } from "./ProductCard";
export const ProductsGrid = () => {
  return (
    <div className="max-w-full grid gap-3 mx-xl:grid-cols-3 mx-lg:grid-cols-2 mx-md:grid-cols-1 grid-cols-4 font-bold  text-center">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};
