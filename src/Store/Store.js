import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slices/AuthSlices";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
