import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../slices/AuthSlice.js";
import AlertReducer from "../slices/AlertSlice.js";
import CategoryReducer from "../slices/CategorySlice.js";
import productReducer from "../slices/ProductSlice.js";
export const store = configureStore({
  reducer: {
    authReducer: AuthReducer,
    alertReducer: AlertReducer,
    categoryReducer: CategoryReducer,
    productReducer: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
