import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slices/AuthSlices";
import noteReducer from "../Slices/NoteSlices";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    notes: noteReducer,
  },
});
