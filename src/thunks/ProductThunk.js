import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../constants/api";
import { setPage, setProducts, setTotalPage } from "../slices/ProductSlice";

export const filterProduct = createAsyncThunk(
  "/product/filter",
  async (data, { dispatch }) => {
    try {
      const resp = await fetch(
        `${API.uri}/product/public/searchFull?page=${
          data.page ? data.page : 0
        }&size=10`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data.category_id ? [data.category_id] : []),
        }
      );
      console.log(await resp.status);
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
