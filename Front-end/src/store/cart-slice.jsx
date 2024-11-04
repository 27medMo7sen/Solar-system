import { createSlice } from "@reduxjs/toolkit";

let localStorageCart = JSON.parse(localStorage.getItem("cart")) || { items: [], totalPrice: 0, totalQuantity: 0 };

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: localStorageCart.items,
    totalPrice: localStorageCart.totalPrice,
    isCartVisible: false,
    totalQuantity: localStorageCart.totalQuantity,
  },
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.items.find((cartItem) => cartItem.id === item.id);

      const itemTotalPrice = (item.price * item.amount) - ((item.price * item.amount * item.discount) / 100);

      if (existingItem) {
        existingItem.amount += item.amount;

       
        state.totalPrice += itemTotalPrice; 
      } else {
        state.items.push(item);
        state.totalPrice += itemTotalPrice; 
      }

      state.totalQuantity += item.amount;

      localStorageCart.items = state.items;
      localStorageCart.totalQuantity = state.totalQuantity;
      localStorageCart.totalPrice = state.totalPrice; 
      localStorage.setItem("cart", JSON.stringify(localStorageCart));
    },
    toggleCart(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((cartItem) => cartItem.id === id);

      if (existingItem) {

        if (existingItem.amount === 1) {
          state.items = state.items.filter((cartItem) => cartItem.id !== id);
          state.totalPrice -= existingItem.price * ( existingItem.discount / 100); 
        } else {
          existingItem.amount -= 1;
          state.totalPrice -= existingItem.price * ( existingItem.discount / 100); 
        }

        state.totalQuantity -= 1;
        localStorageCart.items = state.items;
        localStorageCart.totalQuantity = state.totalQuantity;
        localStorageCart.totalPrice = state.totalPrice; 
        localStorage.setItem("cart", JSON.stringify(localStorageCart));
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0; 
      localStorage.removeItem("cart");
    },
  },
});

export const cartActions = cartSlice.actions;
