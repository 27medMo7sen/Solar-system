import React, { useState } from "react";

export const ProductActions = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="max-w-detail-card h-full flex flex-col shrink-1 ">
      <h1 className="text-5xl mx-lg:text-3xl font-bold">
        Tigo El Battery with Enclosure – 9.9Wh, 9.9kW Capacity | 1 Enclosure & 3
        Modules
      </h1>

      <p className="mt-4 text-xl text-black font-semibold">
        Lorem ipsum dolor sit amet consectetur. Fermentum bibendum at volutpat
        purus viverra semper. Lorem ipsum dolor sit amet consectetur. Fermentum
        bibendum at volutpat purus viverra semper. Lorem ipsum dolor sit amet
        consectetur. Fermentum bibendum at volutpat purus viverra semper. Lorem
        ipsum dolor sit amet consectetur. Fermentum bibendum at volutpat purus
        viverra semper. Lorem ipsum dolor sit amet consectetur.
      </p>

      <div className=" flex flex-col shrink-1 border-2 border-border-color rounded-md p-3 mt-10 ">
        <div className="flex justify-between items-center pt-2">
          <div className=" flex  justify-around w-full">
            <div className="flex flex-col justify-between items-center  gap-3">
              <span className="font-semibold underline text-2xl">
                Quantity:
              </span>
              <div className="inline-flex items-center ml-4">
                <button
                  onClick={decreaseQuantity}
                  className="px-3 py-1 bg-Secondary-button hover:bg-Secondary-button-hover text-white rounded-lg font-bold"
                >
                  -
                </button>
                <span className="px-4 text-lg">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="px-3 py-1 bg-Secondary-button hover:bg-Secondary-button-hover text-white  rounded-lg font-bold"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <span className="font-semibold underline text-2xl">Price:</span>

              <span className="text-lg line-through text-red-500 mr-2">
                2000$
              </span>
              <span className="text-4xl font-bold text-black">1500$</span>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <button className="px-6 py-2 justify-center flex basis-80 w-auto bg-Primary-button hover:bg-Primary-button-hover text-white font-bold rounded-l-lg">
            ADD TO CART
          </button>
          <button className="px-6 py-2 max-w-1/5 bg-Secondary-button hover:bg-Secondary-button-hover text-white font-bold rounded-r-lg">
            Compare
          </button>
        </div>
      </div>
    </div>
  );
};
