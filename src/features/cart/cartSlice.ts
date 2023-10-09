import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../product/productSlice";
import { useAppSelector } from "../../app/hooks";

export type CartItemType = ProductType & { quantity: number };

export type CartState = {
  items: CartItemType[];
};

const LOCAL_STORAGE_KEY = "items";

const getFromLocal = () => {
  const value = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (value !== null) {
    return JSON.parse(value);
  }
  return [];
};

const initialState: CartState = { items: getFromLocal() };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      state.items.push({ ...action.payload, quantity: 1 });
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.items));
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; newQuantity: number }>
    ) => {
      state.items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: action.payload.newQuantity };
        }
        return item;
      });
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.items));
    },
    removeItemById: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.items));
    },
  },
});
export const { addToCart, updateQuantity, removeItemById, clearCart } =
  cartSlice.actions;

export const getTotalCartQuantity = () => {
  const { items } = useAppSelector((state) => state.cart);
  return items.reduce((sum, item) => sum + item.quantity, 0);
};
export const getTotalCartPrice = () => {
  const { items } = useAppSelector((state) => state.cart);
  return items
    .reduce((sum, item) => sum + item.quantity * item.price, 0)
    .toFixed(2);
};

export default cartSlice.reducer;
