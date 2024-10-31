import { MainProducts } from "../components/Products/MainProducts";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
export const Products = () => {
  const dispatch = useDispatch();
  dispatch(uiActions.clearPath());
  dispatch(uiActions.addToPathbar({ name: "Products", link: "/products" }));
  return <>
    <MainProducts/>
  </>;
};
