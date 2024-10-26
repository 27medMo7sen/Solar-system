import { useInViewAnimation } from "../../hooks/useInViewAnimation";
import { ProductCard } from "../General/ProductCard";
import { products } from "../../Data";
import { ProductList } from "../General/ProductList";

export const FeaturedProducts = () => {
  const { slideRef, isVisible } = useInViewAnimation();
  return (
    <div
      ref={slideRef}
      className={`my-10 ${
        isVisible ? "animate-slideRight visible" : "invisible"
      } px-20 mx-sm:px-1 `}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <ProductList>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </ProductList>
    </div>
  );
};
