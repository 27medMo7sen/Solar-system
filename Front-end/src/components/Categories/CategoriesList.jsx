import { categories } from "../../Data";
import { ProductCard } from "../General/ProductCard";
import { ProductList } from "../General/ProductList";
export const CategoriesList = () => {
  return <div className="flex flex-col gap-2 ml-28 mx-lg:ml-10 mx-md:ml-0">
    {categories.map((category, index) => (
   < ProductList key={index} image={category.image} name={category.name} >
    {category.products.map((product, index) => (
      <ProductCard key={index} product={product} />
    ))}
    
   </ProductList>
    ))}
   </div>
};
