import { PiLineVerticalBold } from "react-icons/pi";

export const ProductCard = ({ product, index }) => {
  return (
    <div
      key={index}
      className="bg-white w-80 min-w-80 range-xs:min-w-72 relative shadow-md rounded-md p-4 group"
    >
      <span className="text-red-500 absolute top-0 right-0 hover:font-bold z-10 bg-blue-200 h-10 flex justify-center flex-col p-1 rounded-bl-md rounded-tr-md  text-sm">
        {product.discount}
      </span>

      <div className="flex justify-center relative items-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-60 h-60 object-cover mb-4 rounded-md"
        />
        <div className="absolute h-full w-full bg-black/20 flex flex-col gap-3 justify-center items-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ">
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white
                  font-semibold py-2 px-6 rounded"
          >
            Add to cart
          </button>
          <div className="flex gap-4">
            <button className="bg-black hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded">
              View
            </button>
            <button className="bg-black hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded">
              Compare
            </button>
          </div>
        </div>
      </div>

      <h3 className="text-md font-medium mb-2">{product.title}</h3>
      <p className="text-sm text-gray-600 mb-4">{product.description}</p>

      <div className="flex items-center mb-4">
        <span className="text-orange-500 text-lg mr-2">★★★★★</span>
        <span className="text-gray-600 text-sm">({product.reviews})</span>
      </div>

      <div className="flex  items-center">
        <span className="text-xl font-bold text-black">{product.price}$</span>
        <PiLineVerticalBold className="text-red-600 font-bold" />

        <span className="text-gray-400 line-through text-sm">
          {product.originalPrice}$
        </span>
      </div>
    </div>
  );
};
