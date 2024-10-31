import { Fragment } from "react";
import coverPhoto from "../../assets/productsCover.png";
import { ApiFeatures } from "./ApiFeatures";
import { ProductsGrid } from "../General/ProductsGrid";
export const MainProducts = () => {
  
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
