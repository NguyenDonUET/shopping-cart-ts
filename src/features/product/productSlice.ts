import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type ProductType = {
  id: number;
  name: string;
  image: string;
  price: number;
  des: string;
};

export const products: ProductType[] = [
  {
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTc0NTF8MHwxfHNlYXJjaHw1fHx3YXRjaHxlbnwwfHx8fDE2OTY3NzY3NTZ8MA&ixlib=rb-4.0.3&q=85",
    id: 1,
    name: "Widget",
    price: 9.99,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ratione eum magnam?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTc0NTF8MHwxfHNlYXJjaHwyfHxwaG9uZXxlbnwwfHx8fDE2OTY3NzY4MTB8MA&ixlib=rb-4.0.3&q=85",
    id: 2,
    name: "Premium Widget",
    price: 19.99,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ratione eum magnam?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTc0NTF8MHwxfHNlYXJjaHw3fHxwaG9uZXxlbnwwfHx8fDE2OTY3NzY4MTB8MA&ixlib=rb-4.0.3&q=85",
    id: 3,
    name: "Deluxe Widget",
    price: 29.99,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ratione eum magnam?",
  },
];

export type ProductState = {
  products: ProductType[];
  loading: boolean;
  error: boolean;
};

const initialState: ProductState = {
  products: products || [],
  loading: true,
  error: false,
};

export const getProducts = createAsyncThunk("products/getAll", async () => {
  const response = await fetch("products.json");
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
