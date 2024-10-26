import { ProductsGrid } from "../General/ProductsGrid";

export const RelatedProducts = () => {
  return (
    <div className="flex flex-col">
      <div className="max-w-full font-bold text-2xl text-center">
        Related Products
      </div>
      <ProductsGrid />
    </div>
  );
};
