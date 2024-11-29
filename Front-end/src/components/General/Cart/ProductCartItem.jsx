import { PiLineVerticalBold } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";
export const ProductCartItem = (props) => {
  const dispatch = useDispatch();
  const addItemHandler = () => {
    const product = props.product;
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      amount: 1,
      discount: product.discount,
    };
    dispatch(cartActions.addToCart(cartItem));
  };
  const removeItemHandler = () => {
    dispatch(cartActions.removeFromCart(props.product.id));
  };
  return (
    <div className="flex justify-around gap-2 items-center  border-b-2  mx-sm:w-full mx-sm:flex-col ">
      <div className="flex flex-col items-center">
        <img
          src={props.product.image}
          alt={props.product.title}
          className="w-20 object-cover rounded-lg"
        />
        <p className="text-md font-semibold mb-2">{props.product.title}</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 justify-center items-center">
          <button
            className="flex justify-center items-center bg-Primary-button/80 hover:bg-Primary-button text-white font-semibold rounded-md w-8 border-none text-3xl"
            onClick={addItemHandler}
          >
            +
          </button>
          <span className="text-xl font-bold text-black">
            {props.product.amount}
          </span>
          <button
            className="flex justify-center items-center bg-Primary-button/80 hover:bg-Primary-button text-white font-semibold rounded-md w-8 border-none text-3xl"
            onClick={removeItemHandler}
          >
            -
          </button>
        </div>
        <div className="flex  items-center">
          <span className="text-xl font-bold text-black">
            Price: $
            {props.product.price *
              props.product.amount *
              (props.product.discount / 100)}
          </span>
          <PiLineVerticalBold className="text-red-600 font-bold" />
          <span className="text-gray-400 line-through text-sm">
            $ {props.product.price * props.product.amount}
          </span>
        </div>
      </div>
    </div>
  );
};
