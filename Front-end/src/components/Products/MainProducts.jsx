import { Fragment } from "react";
import coverPhoto from "../../assets/productsCover.png";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { ApiFeatures } from "./ApiFeatures";
import { ProductsGrid } from "../General/ProductsGrid";
export const MainProducts = () => {
  const dispatch = useDispatch();
  dispatch(uiActions.addToPathbar({ name: "Products", link: "/products" }));
  return (
    <Fragment>
      <img src={coverPhoto} alt="coverPhoto" className="mb-3" />
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <ApiFeatures />
          <ProductsGrid />
        </div>
      </div>
    </Fragment>
  );
};
