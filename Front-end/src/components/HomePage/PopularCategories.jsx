import React from "react";
import { Link } from "react-router-dom";
import PanelsImg from "../../assets/pannels.png";
import BatteriesImg from "../../assets/batteries.png";
import InvertersImg from "../../assets/inverters.png";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";

export const PopularCategories = () => {
  const categories = [
    { name: "Panels", image: PanelsImg },
    { name: "Batteries", image: BatteriesImg },
    { name: "Inverters", image: InvertersImg },
  ];
  const { isVisible, slideRef } = useInViewAnimation();
  return (
    <div
      ref={slideRef}
      className={`w-full py-10 bg-white text-center ${
        isVisible ? "animate-slideLeft visible" : "invisible"
      }`}
    >
      <div className="flex justify-center items-center">
        <div className="flex justify-center mx-md:flex-col mn-md:relative w-2/3 items-center mb-8 px-4 sm:px-10">
          <h2 className="text-3xl font-bold w-full">Popular Categories</h2>
          <Link
            to="/categories"
            className="text-orange-500 mn-md:absolute right-10 hover:underline"
          >
            View all <span className=" ">→</span>
          </Link>
        </div>
      </div>

      <div className="flex justify-center items-center ">
        <div className="grid grid-cols-3 range-md:grid-cols-2 mx-md:grid-cols-1 gap-10 px-4 sm:px-10">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 w-80 mx-md:w-72 shadow-lg p-4 rounded-md justify-center items-center flex flex-col"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-44 h-auto mb-4"
              />
              <h3 className="font-medium text-lg">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
