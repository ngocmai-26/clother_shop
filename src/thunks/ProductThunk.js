import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../constants/api";
import {
  setPage,
  setProducts,
  setSingleProduct,
  setSingleProductComment,
  setTotalPage,
} from "../slices/ProductSlice";
import { setAlert } from "../slices/AlertSlice";

export const filterProduct = createAsyncThunk(
  "/product/filter",
  async (data, { dispatch }) => {
    try {
      let uri = `${API.uri}/product/public/searchFull?page=${
        data.page ? data.page : 0
      }&size=12`;
      if (data.price) {
        uri += `&smallPrice=${data.price.smallPrice}&largePrice=${data.price.largePrice}`;
      }
      const resp = await fetch(uri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data.category_id ? [data.category_id] : []),
      });
      if (resp.status >= 200 && resp.status < 300) {
        const jsonData = await resp.json();
        dispatch(setProducts(jsonData.content));
        dispatch(setTotalPage(jsonData.totalPages));
        dispatch(setPage(data.page ? data.page : 0));
      }
    } catch (e) {
      console.log(e);
    }
  }
);

export const getProductById = createAsyncThunk(
  "/product/id",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      let uri = `${API.uri}/product/public/findById?id=${id}`;

      const resp = await fetch(uri, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (resp.status >= 200 && resp.status < 300) {
        const jsonData = await resp.json();
        dispatch(setSingleProduct(jsonData));
      }
    } catch (e) {
      console.log(e);
    }
  }
);
export const getCommentByProduct = createAsyncThunk(
  "/product/comment",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      let uri = `${API.uri}/product-comment/public/find-by-product?idproduct=${id}`;

      const resp = await fetch(uri, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (resp.status >= 200 && resp.status < 300) {
        const jsonData = await resp.json();
        dispatch(setSingleProductComment(jsonData));
      }
    } catch (e) {
      console.log(e);
    }
  }
);
export const addComment = createAsyncThunk(
  "/product/add",
  async (comment, { dispatch, rejectWithValue }) => {
    try {
      let uri = `${API.uri}/product-comment/user/create`;
      const token = localStorage.getItem("auth_token");
      const resp = await fetch(uri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(comment),
      });
      if (resp.status >= 200 && resp.status < 300) {
        dispatch(setAlert({ type: "success", content: "Đã đánh giá" }));
        dispatch(getCommentByProduct(comment.product.id));
      }
    } catch (e) {
      console.log(e);
    }
  }
);
