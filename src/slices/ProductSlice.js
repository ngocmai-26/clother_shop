import { createSlice } from "@reduxjs/toolkit";

const initState = {
  products: [],
  totalPage: 0,
  page: 0,
  singleProduct: {},
  singleProductComment: [],
  relatedProduct: [],
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
    setSingleProduct: (state, { payload }) => {
      state.singleProduct = payload;
    },
    setSingleProductComment: (state, { payload }) => {
      state.singleProductComment = payload;
    },
    setRelatedProduct: (state, { payload }) => {
      state.relatedProduct = payload;
    },
  },
});

export const {
  setProducts,
  setTotalPage,
  setPage,
  setSingleProduct,
  setSingleProductComment,
  setRelatedProduct,
} = ProductSlice.actions;

export default ProductSlice.reducer;
