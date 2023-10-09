import { Link } from "react-router-dom";
import {
  getTotalCartPrice,
  getTotalCartQuantity,
} from "../features/cart/cartSlice";

export default function Header() {
  const totalCartQuantity = getTotalCartQuantity();
  const totalCartPrice = getTotalCartPrice();

  return (
    <header className="">
      <div className="container ">
        <div className="navbar bg-base-100 py-4 px-4 lg:px-0">
          <div className="flex-1">
            <Link
              to={"/"}
              className="normal-case text-2xl lg:text-4xl font-bold"
            >
              MyShop
            </Link>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">
                    {totalCartQuantity}
                  </span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">
                    {totalCartQuantity}{" "}
                    {totalCartQuantity >= 2 ? "items" : "item"}
                  </span>
                  <span className="text-info">
                    Total price: $
                    {parseInt(totalCartPrice) <= 0 ? 0 : totalCartPrice}
                  </span>
                  <div className="card-actions">
                    <Link className="btn btn-primary btn-block" to={"/cart"}>
                      {" "}
                      View cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
