import { useAppDispatch } from "../../app/hooks";
import { clearCart, getTotalCartPrice } from "../../features/cart/cartSlice";
import SquareBorder from "../SquareBorder";

export default function CartFooter() {
  const dispatch = useAppDispatch();
  const totalCartPrice = getTotalCartPrice();

  return (
    <div className="flex justify-between mt-12">
      <SquareBorder>
        <div className="w-32 flex justify-between items-baseline">
          <p className="font-semibold">Total: </p>
          <span className="font-bold text-xl">${totalCartPrice}</span>
        </div>
      </SquareBorder>
      <div className="space-x-4">
        <button className="btn" onClick={() => dispatch(clearCart())}>
          Remove all
        </button>
        <button className="btn btn-primary">Check out</button>
      </div>
    </div>
  );
}
