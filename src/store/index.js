import React from "react";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const storedCartItems = JSON.parse(localStorage.getItem("CartItem"));

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: storedCartItems || [],
    total: 0,
  },
  reducers: {
    deleteCartItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("CartItem", JSON.stringify(state.items));
    },
    increaseCount: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        if (typeof item.counter === "number" && typeof item.cost === "number") {
          item.counter += 1;
          item.cost = item.counter * Number(item.oldCost);
          console.log("This is second working: ", item.cost)
        } else {
          item.counter = 2;
          item.cost = item.counter * Number(item.cost);
          console.log("This is first working: ", item.cost)
        }
        localStorage.setItem("CartItem", JSON.stringify(state.items));
      }
    },
    decreaseCount: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item.counter > 1) {
        item.counter -= 1;
        item.cost = item.counter * Number(item.oldCost);
        console.log(item.cost)

        localStorage.setItem("CartItem", JSON.stringify(state.items));
      }
    },

    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        alert(`"${existingItem.Title}" has already been added to the cart`);
      } else {
        state.items = [...state.items, action.payload];
        localStorage.setItem("CartItem", JSON.stringify(state.items));
      }
    },
  },
});

export const { addToCart, increaseCount, decreaseCount, deleteCartItem } =
  cartSlice.actions;

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
