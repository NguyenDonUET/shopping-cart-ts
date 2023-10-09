import { useAppSelector } from "../../app/hooks";

import Product from "./Product";

export default function ProductList() {
  const { products } = useAppSelector((state) => state.product);

  return (
    <div className="container my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-4 lg:mx-0">
        {products.length > 0 &&
          products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
}
