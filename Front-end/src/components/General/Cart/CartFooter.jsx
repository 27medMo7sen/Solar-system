import { useSelector } from "react-redux";

export const CartFooter = () => {
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    
    return(
       totalPrice>0 && <div className="flex justify-between items-center  mx-sm:flex-col gap-2 border-t mx-sm:w-[280px] pt-2">
            <p className="font-bold text-lg">Total Price: ${totalPrice.toFixed(2)}</p>
            <button className="bg-primary text-white px-4 py-2 bg-Primary-button hover:bg-Primary-button-hover rounded-md">Checkout</button>
        </div>
    )
}   