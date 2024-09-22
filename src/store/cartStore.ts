import { create } from "zustand";
import globalApi from "@/utils/globalApi";
import Toast from "@/components/Toast";
import { Cart, CartItem } from "@/types/cart";
import { persist } from "zustand/middleware";

interface CartState {
  cartItems: Cart[];
  totalPrice: number;
  fetchCart: () => Promise<void>;
  addCartItem: (
    variantId: number,
    productId: number,
    quantity: number
  ) => Promise<void>;
  updateCartItem: (cart_item_id: number,variant_id: number, newQuantity: number) => Promise<void>;
  removeCartItem: (cart_item_id: number) => Promise<void>;
  calculateTotalPrice: () => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set, get) => ({
  cartItems: [],
  totalPrice: 0,

  fetchCart: async () => {
    try {
      const cartItems = await globalApi.getUserCartItems();
      set({ cartItems });
      get().calculateTotalPrice();
    } catch (error) {
      Toast({ message: "Failed to fetch cart items", type: "error" });
    }
  },

  addCartItem: async (
    variant_id: number,
    productId: number,
    quantity: number
  ) => {
    try {
      // Check if the variant exists in any cart's cart_items
      let existingItem: CartItem | undefined; // Explicitly declare as CartItem or undefined
      let existingCartId: number | undefined;
  
      get().cartItems.forEach((cart) => {
        const item = cart.cart_items.find(
          (cartItem) => cartItem.variant.variant_id === variant_id
        );
        if (item) {
          existingItem = item;
          existingCartId = cart.cart_id;
        }
      });
  
      if (existingItem && existingCartId !== undefined) {
        // Update the quantity if the variant already exists in the cart
        const newQuantity = existingItem.quantity + quantity;
        await get().updateCartItem(existingItem.cart_item_id,variant_id, newQuantity);
      } else {
        const newItem = await globalApi.addToCart(variant_id, quantity);
  
        if (!newItem || newItem.error) {
          throw new Error(newItem.message || "Failed to add item to cart");
        }
  
        // Add the new item to the correct cart
        set((state) => ({
          cartItems: state.cartItems.map((cart) =>
            cart.cart_id === newItem.cart_id
              ? {
                  ...cart,
                  cart_items: [
                    ...cart.cart_items,
                    { ...newItem, product_id: productId, quantity },
                  ],
                }
              : cart
          ),
        }));
  
        Toast({ message: "Item added to cart", type: "success" });
      }
  
      // Recalculate the total price after adding
      get().calculateTotalPrice();
    } catch (error: any) {
      Toast({
        message: error.message || "Failed to add item to cart",
        type: "error",
      });
    }
  },
  

  updateCartItem: async (cart_item_id: number,variant_id: number, newQuantity: number) => {
    try {
      // Ensure that the new quantity is valid (e.g., greater than 0)
      if (newQuantity <= 0) {
        throw new Error("Quantity must be greater than zero.");
      }

      const updatedItem = await globalApi.updateCartItem(
        cart_item_id,
        variant_id,
        newQuantity
      );

      if (!updatedItem || updatedItem.error) {
        throw new Error(updatedItem.message || "Failed to update cart item");
      }

      set((state) => ({
        cartItems: state.cartItems.map((cart) => ({
          ...cart,
          cart_items: cart.cart_items.map((item) =>
            item.cart_item_id === cart_item_id
              ? { ...item, quantity: newQuantity }
              : item
          ),
        })),
      }));

      Toast({ message: "Cart item updated successfully", type: "success" });
      get().calculateTotalPrice();
    } catch (error: any) {
      Toast({
        message: error.message || "Failed to update cart item",
        type: "error",
      });
    }
  },

  removeCartItem: async (cart_item_id: number) => {
    try {
      await globalApi.deleteCartItem(cart_item_id);
      set((state) => ({
        cartItems: state.cartItems.map((cart) => ({
          ...cart,
          cart_items: cart.cart_items.filter(
            (item) => item.cart_item_id !== cart_item_id
          ),
        })),
      }));
      get().calculateTotalPrice();
    } catch (error) {
      Toast({ message: "Failed to remove cart item", type: "error" });
    }
  },

  calculateTotalPrice: () =>
    set((state) => ({
      totalPrice: state.cartItems.reduce(
        (total, cart) =>
          total +
          cart.cart_items.reduce(
            (cartTotal, item) =>
              cartTotal + item.quantity * item.variant.price,
            0
          ),
        0
      ),
    })),

  clearCart: () => set({ cartItems: [], totalPrice: 0 }),
}));
