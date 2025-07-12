// cartStore.js
import { create } from 'zustand';

const useCartStore = create((set, get) => ({
  cartItems: [],

  addToCart: (product) => {
    const existing = get().cartItems.find((item) => item.id === product.id);
    if (existing) {
      set((state) => ({
        cartItems: state.cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      }));
    } else {
      set((state) => ({
        cartItems: [...state.cartItems, { ...product, quantity: 1 }],
      }));
    }
  },

  removeFromCart: (id) => {
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    }));
  },

  decreaseQuantity: (id) => {
    const item = get().cartItems.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      set((state) => ({
        cartItems: state.cartItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        ),
      }));
    } else {
      get().removeFromCart(id);
    }
  },

  clearCart: () => set({ cartItems: [] }),

  // 🔍 Helper: Check if item is in cart
  isInCart: (id) => {
    return get().cartItems.some((item) => item.id === id);
  },

  // 🔢 Helper: Total item count
  cartCount: () => {
    return get().cartItems.reduce((total, item) => total + item.quantity, 0);
  },
}));

export default useCartStore;
