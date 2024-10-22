import { useInViewAnimation } from "../../hooks/useInViewAnimation";
import { ProductCard } from "../General/ProductCard";
import { products } from "../../Data";

export const FeaturedProducts = () => {
  const { slideRef, isVisible } = useInViewAnimation();
  return (
    <div
      ref={slideRef}
      className={`my-10 ${
        isVisible ? "animate-slideRight visible" : "invisible"
      }`}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="flex justify-center items-center">
        <div className="flex justify-start gap-5 range-xs:max-w-full range-xs:pl-1 overflow-x-auto pb-5 pl-4 pr-4 max-w-80%">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
