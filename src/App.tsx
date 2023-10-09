import { Routes, Route } from "react-router-dom";
import SharedLayout from "./layout/SharedLayout";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="cart" element={<ShoppingCart />}></Route>
      </Route>
    </Routes>
  );
}
