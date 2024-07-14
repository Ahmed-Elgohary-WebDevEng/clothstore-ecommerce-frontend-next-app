import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProps } from "@/types";
import axios from "@/lib/axios";
import { GetCartItemsResponse } from "@/types/api-responses";

type CartSlice = {
  cart: CartProps | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
};

type NewCartItemProps = {
  product_id: number;
  quantity: number;
};

const initialState: CartSlice = {
  cart: null,
  status: "idle",
  error: null,
};

// Async thunk for fetching cart items
export const fetchCartItems = createAsyncThunk<GetCartItemsResponse, void>(
  "cart/fetchCartItems",
  async () => {
    const response = await axios.get("/v1/api/cart/items"); // replace with your API endpoint
    if (response.status !== 200) {
      throw new Error("Failed to fetch cart items");
    }
    return response.data as GetCartItemsResponse;
  },
);

export const addItemToCart = createAsyncThunk(
  "cart/addItemToCart",
  async (item: NewCartItemProps, { dispatch }) => {
    const response = await axios.post("/v1/api/cart/items", item);
    if (response.status !== 200) {
      throw new Error("Failed to add item to cart");
    }
    dispatch(fetchCartItems());
    return response.data;
  },
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartItems: (state) => {},
    addItem: () => {},
    removeItem: () => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cart = action.payload.data[0];
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch cart items";
      })
      .addCase(addItemToCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        addItemToCart.fulfilled,
        (state, action: PayloadAction<NewCartItemProps>) => {
          state.status = "succeeded";
        },
      )
      .addCase(addItemToCart.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { getCartItems, addItem, removeItem } = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;
