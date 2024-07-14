import { CartItemProps, CartProps } from "@/types";
import { create } from "zustand";
import axios from "@/lib/axios";
import { GetCartItemsResponse } from "@/types/api-responses";

type State = {
  cart: CartProps | null;
  cartItems: CartItemProps[];
  cartItemsCount: number;
  isLoading: boolean;
};

type Action = {
  getCart: () => void;
  addItem: (newItem: { product_id: number; quantity: number }) => void;
  removeItem: (cartItemId: number) => void;
};

export const useCartStore = create<State & Action>((set) => ({
  cart: null,
  cartItems: [],
  cartItemsCount: 0,
  isLoading: true,
  async getCart() {
    try {
      const { data } = await axios.get("/v1/api/cart/items");
      const result = data as GetCartItemsResponse;

      set({
        cart: result.data[0],
        cartItems: result.data[0].cart_items,
        cartItemsCount: result.data[0].cart_items_count,
        isLoading: false,
      });
    } catch (error) {
      set((prev) => ({ ...prev, isLoading: false }));
    }
  },
  async addItem(newItem) {
    try {
      await axios.post("/v1/api/cart/items", newItem);

      const { data } = await axios.get("/v1/api/cart/items");

      const result = data as GetCartItemsResponse;

      set({
        cart: result.data[0],
        cartItems: result.data[0].cart_items,
        cartItemsCount: result.data[0].cart_items_count,
        isLoading: false,
      });
    } catch (error) {
      set((prev) => ({ ...prev, isLoading: false }));
    }
  },
  async removeItem(cartItemId) {
    try {
      await axios.delete(`/v1/api/cart/items/${cartItemId}`);

      const { data } = await axios.get("/v1/api/cart/items");

      const result = data as GetCartItemsResponse;

      set({
        cart: result.data[0],
        cartItems: result.data[0].cart_items,
        cartItemsCount: result.data[0].cart_items_count,
        isLoading: false,
      });
    } catch (error) {
      set((prev) => ({ ...prev, isLoading: false }));
    }
  },
}));
