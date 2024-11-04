import { Fragment } from "react";
import { ProductCartList } from "./ProducCartList";
import { CartFooter } from "./CartFooter";

export const CartMain = () => {
  return (
    <Fragment>
        <h1 className="text-2xl font-semibold text-center border-b-2 w-[600px] mx-md:w-[450px] mx-sm:w-[280px] m-0 p-0">Cart</h1>
        <ProductCartList />
        <CartFooter/>
    </Fragment>
  );
};
