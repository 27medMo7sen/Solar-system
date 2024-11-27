import { PiLineVerticalBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa6";
import { IoIosGitCompare } from "react-icons/io";
import { MdOutlinePageview } from "react-icons/md";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { uiActions } from "../../store/ui-slice";

export const ProductCard = ({ product, index }) => {
  const dispatch = useDispatch();

  const addToCart = (product) => () => {
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      amount: 1,
      discount: product.discount,
    };
    dispatch(uiActions.setNavbar(true));
    dispatch(cartActions.addToCart(cartItem));
    dispatch(uiActions.toastEmitter({ type: "success", message: "Item added to cart" }));
  };

  return (
    <div
      key={index}
      className="bg-white max-w-80 min-w-80 mx-sm:min-w-72 relative shadow-md rounded-md p-4 mx-sm:snap-center group"
    >
      <span className="text-red-500 absolute top-0 right-0 hover:font-bold z-10 bg-blue-200 h-10 flex justify-center flex-col p-1 rounded-bl-md rounded-tr-md text-sm">
        {product.discount}%
      </span>

      <div className="flex justify-center relative items-center">
        <img
          src={product.image}
          alt={product.title}
          className="max-w-60 object-cover mb-4 rounded-md"
        />
        <div className="absolute h-full w-full bg-black/20 flex flex-col gap-3 justify-center items-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={addToCart(product)}
            className="bg-Primary-button hover:bg-Primary-button-hover text-white font-semibold py-2 px-6 rounded"
          >
            <span className="flex justify-center items-center gap-1">
              Add to cart <FaCartPlus />
            </span>
          </button>

          <div className="flex gap-4">
            <Link
              to={`/product-details/${product.title}`}
              className="bg-Secondary-button hover:bg-Secondary-button-hover text-white font-semibold py-2 px-6 rounded"
            >
              <span className="flex justify-center items-center gap-1">
                View <MdOutlinePageview />
              </span>
            </Link>
            <button className="bg-Secondary-button hover:bg-Secondary-button-hover text-white font-semibold py-2 px-6 rounded">
              <span className="flex justify-center items-center gap-1">
                Compare <IoIosGitCompare />
              </span>
            </button>
          </div>
        </div>
      </div>

      <h3 className="text-md font-medium mb-2">{product.title}</h3>
      <p className="text-sm text-gray-600 mb-4">{product.description}</p>

      <div className="flex items-center mb-4">
        <span className="text-orange-500 text-lg mr-2">
          {Array(5)
            .fill(0)
            .map((_, idx) => (
              idx < product.stars ? (
                <span key={idx} className="text-orange-500">★</span>
              ) : (
                <span key={idx} className="text-gray-700">★</span>
              )
            ))}
        </span>
        <span className="text-gray-600 text-sm">({product.reviews})</span>
      </div>

      <div className="flex items-center">
        <span className="text-xl font-bold text-black">${product.price}</span>
        <PiLineVerticalBold className="text-red-600 font-bold" />
        <span className="text-gray-400 line-through text-sm">
          ${product.originalPrice}
        </span>
      </div>
    </div>
  );
};
