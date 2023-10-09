import { ChangeEvent, ReactElement } from "react";
import formatUSDPrice from "../../utils/formatUSDPrice";
import {
  CartItemType,
  removeItemById,
  updateQuantity,
} from "../../features/cart/cartSlice";
import { useAppDispatch } from "../../app/hooks";

type CartItemProps = {
  item: CartItemType;
};

const MAX_OPTION_NUMBER = 10;

export default function CartItem({ item }: CartItemProps) {
  const dispatch = useAppDispatch();

  const lineTotal: number = item.quantity * item.price;

  const optionValues: number[] = [...Array(MAX_OPTION_NUMBER).keys()].map(
    (i) => i + 1
  );

  const options: ReactElement[] = optionValues.map((val) => {
    return (
      <option key={`opt${val}`} value={val}>
        {val}
      </option>
    );
  });

  const onChangeQty = (e: ChangeEvent<HTMLSelectElement>) => {
    const newQuantity: number = parseInt(e.target.value);
    dispatch(updateQuantity({ id: item.id, newQuantity }));
  };

  const onRemoveFromCart = () => {
    dispatch(removeItemById({ id: item.id }));
  };

  return (
    <>
      <div className="md:hidden cart-item py-4 border-b-2 border-b-gray-400">
        <img
          className=" row-span-full w-[80px] h-[80px]"
          src={item.image}
          alt={item.name}
        />
        {/* info */}
        <h3 className="col-start-2 col-end-[-1] font-bold text-base md:text-2xl text-truncate">
          {item.name}
        </h3>
        {/* quantity */}
        <select
          name="itemQty"
          id="itemQty"
          className=" select select-bordered w-fit max-w-full col-start-2 col-end-3"
          value={item.quantity}
          aria-label="Item Quantity"
          onChange={onChangeQty}
        >
          {options}
        </select>
        <h3 className="col-start-2 col-end-[-1] row-start-2 text-base font-bold tracking-wider">
          {formatUSDPrice(lineTotal)}
        </h3>
        <button
          className="btn btn-circle row-start-2 col-start-3 justify-self-center "
          aria-label="Remove Item From Cart"
          title="Remove Item From Cart"
          onClick={onRemoveFromCart}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="md:w-6 md:h-6 w-4 h-4"
            viewBox="0 0 512 512"
          >
            <path
              d="M296 64h-80a7.91 7.91 0 00-8 8v24h96V72a7.91 7.91 0 00-8-8z"
              fill="currentColor"
            />
            <path
              d="M432 96h-96V72a40 40 0 00-40-40h-80a40 40 0 00-40 40v24H80a16 16 0 000 32h17l19 304.92c1.42 26.85 22 47.08 48 47.08h184c26.13 0 46.3-19.78 48-47l19-305h17a16 16 0 000-32zM192.57 416H192a16 16 0 01-16-15.43l-8-224a16 16 0 1132-1.14l8 224A16 16 0 01192.57 416zM272 400a16 16 0 01-32 0V176a16 16 0 0132 0zm32-304h-96V72a7.91 7.91 0 018-8h80a7.91 7.91 0 018 8zm32 304.57A16 16 0 01320 416h-.58A16 16 0 01304 399.43l8-224a16 16 0 1132 1.14z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
      <div className="hidden md:grid md:grid-cols-4 md:grid-rows-3 pt-4 border-b-2 border-b-gray-400">
        <img
          className="row-span-full w-[160px] h-[160px] rounded-lg"
          src={item.image}
          alt={item.name}
        />
        {/* info */}
        <h3 className="col-start-2 col-end-[-1] pb-8 mb-2 font-bold text-2xl text-truncate">
          {item.name}
        </h3>
        {/* <p className="max-w-xs">{item.des}</p> */}
        {/* quantity */}
        <select
          name="itemQty"
          id="itemQty"
          className=" select select-bordered w-fit max-w-full col-start-2 col-end-3"
          value={item.quantity}
          aria-label="Item Quantity"
          onChange={onChangeQty}
        >
          {options}
        </select>
        <h3 className="col-start-2 col-end-[-1] row-start-2 text-xl font-bold tracking-wider">
          {formatUSDPrice(lineTotal)}
        </h3>
        <button
          className="btn btn-circle row-start-2 col-start-4 justify-self-end "
          aria-label="Remove Item From Cart"
          title="Remove Item From Cart"
          onClick={onRemoveFromCart}
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="md:w-6 md:h-6 w-4 h-4"
            viewBox="0 0 512 512"
          >
            <path
              d="M296 64h-80a7.91 7.91 0 00-8 8v24h96V72a7.91 7.91 0 00-8-8z"
              fill="currentColor"
            />
            <path
              d="M432 96h-96V72a40 40 0 00-40-40h-80a40 40 0 00-40 40v24H80a16 16 0 000 32h17l19 304.92c1.42 26.85 22 47.08 48 47.08h184c26.13 0 46.3-19.78 48-47l19-305h17a16 16 0 000-32zM192.57 416H192a16 16 0 01-16-15.43l-8-224a16 16 0 1132-1.14l8 224A16 16 0 01192.57 416zM272 400a16 16 0 01-32 0V176a16 16 0 0132 0zm32-304h-96V72a7.91 7.91 0 018-8h80a7.91 7.91 0 018 8zm32 304.57A16 16 0 01320 416h-.58A16 16 0 01304 399.43l8-224a16 16 0 1132 1.14z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
