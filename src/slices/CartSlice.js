import { createSlice } from "@reduxjs/toolkit";

const initState = {
  products: [],
};
const CartSlice = createSlice({
  name: "carts",
  initialState: initState,
  reducers: {
    setProducts: (state, { payload }) => {
      state.products = payload;
    },
    addProduct: (state, { payload }) => {
      let products = [...state.products];
      for (let product of products) {
        if (
          product.id === payload.id &&
          product.selectedSize.id === payload.selectedSize.id
        ) {
          return;
        }
      }
      products.push(payload);
      state.products = products;
    },
    removeProduct: (state, { payload }) => {
      let products = [...state.products];
      for (let i = 0; i < products.length; i++) {
        if (products[i].id == payload) {
          products.splice(i, 1);
        }
      }
      state.products = products;
    },
    updateProduct: (state, { payload }) => {
      let products = [...state.products];
      for (let i = 0; i < products.length; i++) {
        if (products[i].id == payload.id) {
          products[i] = { ...products[i], ...payload };
        }
      }
      state.products = products;
    },
  },
});

export const { addProduct, updateProduct, removeProduct } = CartSlice.actions;

export default CartSlice.reducer;
