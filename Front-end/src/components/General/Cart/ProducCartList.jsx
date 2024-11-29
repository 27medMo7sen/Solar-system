import { Fragment } from "react";
import { cartActions } from "../../../store/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import emptyCart from "../../../assets/emptyCart.png"
import { ProductCartItem } from "./ProductCartItem";
export const ProductCartList = () => {
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <div className="flex flex-col max-h-[400px] overflow-y-auto my-4 gap-2 mx-sm:w-[280px]">
      {items.length === 0 ? (
      <div className="flex flex-col p-10 justify-center items-center">
        <img
        src= {emptyCart}
        alt="Empty Cart"
        className="w-64 "
        />    
        <p className="text-center font-bold">No items in the cart</p>
        </div>
      ) : (
        items.map((item) => <ProductCartItem key={item.id} product={item} />)
      )}
    </div>
  );
};
