import { createSlice } from "@reduxjs/toolkit";

const initState = {
  products: [],
  totalPage: 0,
  page: 0,
};
const ProductSlice = createSlice({
  name: "products",
  initialState: initState,
  reducers: {
    setProducts: (state, { payload }) => {
      state.products = payload;
    },
    setTotalPage: (state, { payload }) => {
      state.totalPage = payload;
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    },
  },
});

export const { setProducts, setTotalPage, setPage } = ProductSlice.actions;

export default ProductSlice.reducer;
