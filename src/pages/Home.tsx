import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Loading from "../components/Loading";
import ProductList from "../components/Product/ProductList";
import { getProducts } from "../features/product/productSlice";

export default function Home() {
  const { products, loading, error } = useAppSelector((state) => state.product);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return (
      <h2 className="text-4xl font-bold uppercase text-center text-info pt-12">
        Sorry, we have some errors here.
      </h2>
    );
  }
  return (
    <>
      {!loading && products.length === 0 && (
        <h1 className="text-4xl font-bold capitalize absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          No products
        </h1>
      )}
      <ProductList />
    </>
  );
}
