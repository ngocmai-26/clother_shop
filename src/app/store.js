import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../slices/AuthSlice.js";
import AlertReducer from "../slices/AlertSlice.js";
export const store = configureStore({
  reducer: {
    authReducer: AuthReducer,
    alertReducer: AlertReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
