import { PiLineVerticalBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { ProductDetails } from "../../pages/ProductDetails";
export const ProductCard = ({ product, index }) => {
  return (
    <div
      key={index}
      className="bg-white max-w-80 min-w-80 mx-sm:min-w-72 relative shadow-md rounded-md p-4 mx-sm:snap-center group"
    >
      <span className="text-red-500 absolute top-0 right-0 hover:font-bold z-10 bg-blue-200 h-10 flex justify-center flex-col p-1 rounded-bl-md rounded-tr-md  text-sm">
        {product.discount}
      </span>

      <div className="flex justify-center relative items-center">
        <img
          src={product.image}
          alt={product.title}
          className="max-w-60 object-cover mb-4 rounded-md"
        />
        <div className="absolute h-full w-full bg-black/20 flex flex-col gap-3 justify-center items-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ">
          <Link
            className="bg-Primary-button hover:bg-Primary-button-hover text-white
                  font-semibold py-2 px-6 rounded"
          >
            Add to cart
          </Link>
          <div className="flex gap-4">
            <Link
              to={`product-details/${product.name}`}
              className="bg-Secondary-button hover:bg-Secondary-button-hover text-white font-semibold py-2 px-6 rounded"
            >
              View
            </Link>
            <button className="bg-Secondary-button hover:bg-Secondary-button-hover text-white font-semibold py-2 px-6 rounded">
              Compare
            </button>
          </div>
        </div>
      </div>

      <h3 className="text-md font-medium mb-2">{product.title}</h3>
      <p className="text-sm text-gray-600 mb-4">{product.description}</p>

      <div className="flex items-center mb-4">
        <span className="text-orange-500 text-lg mr-2">
          {Array(5).fill(0).map((star, index) => (
            (index<=product.stars) ? <span key={index} className="text-orange-500">★</span> : <span key={index} className="text-gray-700">★</span>
          ))}
        </span>
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
