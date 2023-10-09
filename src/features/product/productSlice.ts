import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type ProductType = {
  id: number;
  name: string;
  image: string;
  price: number;
  des: string;
};

export type ProductState = {
  products: ProductType[];
  loading: boolean;
  error: boolean;
};

const initialState: ProductState = {
  products: [],
  loading: true,
  error: false,
};

export const getProducts = createAsyncThunk("products/getAll", async () => {
  const response = await fetch("http://localhost:5000/products");
  return (await response.json()) as ProductType[];
});

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getProducts.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
