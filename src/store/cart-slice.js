import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQunatity: 0,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQunatity = action.payload.totalQunatity;
      state.items = action.payload.items;
    },
    addItemHandler(state, action) {
      const newitem = action.payload;
      const existing = state.items.find((item) => item.id === newitem.id);
      state.totalQunatity++;
      if (!existing) {
        state.items.push({
          id: newitem.id,
          price: newitem.price,
          quantity: 1,
          totalPrice: newitem.price,
          name: newitem.title,
        });
      } else {
        existing.quantity++;
        existing.totalPrice = existing.totalPrice + newitem.price;
      }
    },
    removeItemHandler(state, action) {
      state.totalQunatity--;
      const id = action.payload;
      const existing = state.items.find((item) => item.id === id);
      if (existing.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existing.quantity--;
        existing.totalPrice = existing.totalPrice - existing.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
