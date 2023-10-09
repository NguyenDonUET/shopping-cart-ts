import { ReactElement, memo } from "react";
import formatUSDPrice from "../../utils/formatUSDPrice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addToCart } from "../../features/cart/cartSlice";
import { ProductType } from "../../features/product/productSlice";

type ProductProps = {
  product: ProductType;
};
export default function Product({ product }: ProductProps): ReactElement {
  const { items } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  let inCart = items.some((item) => item.id === product.id);
  // console.log(inCart);
  return (
    <div className="card bg-white text-slate-800 shadow-xl">
      <figure>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[280px] object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.des}</p>
        <div className="card-actions justify-between items-center mt-3">
          <p className="text-xl">{formatUSDPrice(product.price)}</p>
          <button
            onClick={() => {
              dispatch(addToCart(product));
            }}
            className="btn btn-primary btn-sm disabled:text-neutral"
            disabled={inCart}
          >
            {"Add to cart"} {inCart && "✔"}
          </button>
          {/* {itemInCart} */}
        </div>
      </div>
    </div>
  );
}
