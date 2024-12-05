import { productImages } from "../../Data";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
export const ProductImages = () => {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div className="flex flex-col  ">
      <div className="flex py-10 relative justify-center items-center mx-sm:px-1  px-4 h-main-card border-border-color border rounded-md">
        <button
          className="text-2xl cursor-pointer rounded-lg left-4 bg-slate-200/50 h-8 w-10 absolute border border-1 justify-center flex items-center px-2 border-border-color hover:bg-slate-300"
          onClick={() =>
            setImageIndex(
              (prev) => (prev - 1 + productImages.length) % productImages.length
            )
          }
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        <div className="w-96 p-5 flex items-center">
         <img src={productImages[imageIndex]} alt="product" className="w-full h-full object-contain" />
        </div>
        <button
          className="text-2xl cursor-pointer absolute right-4 rounded-lg bg-slate-200/50 h-8 w-10 border border-1 justify-center flex items-center border-border-color hover:bg-slate-300"
          onClick={() =>
            setImageIndex((prev) => (prev + 1) % productImages.length)
          }
        >
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
      <div className="flex justify-start items-center my-8 overflow-y-auto">
        {productImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="product"
            className={`w-20 border ${
              index == imageIndex ? "border-border-color border-4" : ""
            } rounded-md mx-2 cursor-pointer hover:border-border-color hover:border-4`}
            onClick={() => setImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
