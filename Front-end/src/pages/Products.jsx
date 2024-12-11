import { MainProducts } from "../components/Products/MainProducts";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { useEffect } from "react";

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(uiActions.clearPath());
    dispatch(uiActions.addToPathbar({ name: "Products", link: "/products" }));
  },[dispatch]);

  return <>
    <MainProducts/>
  </>;
};
export default Products;