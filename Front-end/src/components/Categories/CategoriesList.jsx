import { categories } from "../../Data";
import { ProductCard } from "../General/ProductCard";
import { ProductList } from "../General/ProductList";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
export const CategoriesList = () => {
  const dispatch = useDispatch();
  dispatch(uiActions.addToPathbar({ name: "Categories", link: "/categories" }));

  return <div className="flex mt-3 flex-col gap-2 mx-28 mx-lg:mx-10 mx-sm:mx-2">
    {categories.map((category, index) => (
      < ProductList key={index} image={category.image} name={category.name} >
        {category.products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </ProductList>
    ))}
  </div>
};
