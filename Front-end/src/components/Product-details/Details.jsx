import { ProductImages } from "./DetailsSection/ProductImages";
import { ProductDetails } from "./DetailsSection/ProductFeatures";
export const Details = () => {
  return (
    <div className="flex gap-4 mb-4 justify-between mx-lg:flex-col mx-lg:items-center items-start px-20 mx-lg:px-10 mx-sm:px-2">
      <div className="w-full mx-lg:w-auto max-w-main-card max-h-main-card">
        <ProductImages />
      </div>
      <div className="w-full mx-lg:w-auto max-w-main-card">
        <ProductDetails />
      </div>
    </div>
  );
};
