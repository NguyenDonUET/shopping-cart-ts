import { useAppSelector } from "../app/hooks";
import CartFooter from "../components/Cart/CartFooter";
import CartItemList from "../components/Cart/CartItemList";

export default function ShoppingCart() {
  const { items } = useAppSelector((state) => state.cart);

  return (
    <div className="container py-8">
      {
        <div className="px-2 lg:px-0 md:px-12 lg:max-w-3xl lg:mx-auto">
          <CartItemList />
          {items.length > 0 && <CartFooter />}
        </div>
      }
    </div>
  );
}
