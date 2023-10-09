import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import CartItem from "./CartItem";

export default function CartItemList() {
  const { items } = useAppSelector((state) => state.cart);

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center space-y-6">
        <h2 className="text-center text-4xl font-bold mt-4">
          Your cart is empty!
        </h2>
        <Link to={"/"} className="link link-primary">
          Back to home page
        </Link>
      </div>
    );
  }

  return (
    <>
      {items.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </>
  );
}
