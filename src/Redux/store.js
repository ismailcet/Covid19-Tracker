import { configureStore } from "@reduxjs/toolkit";
import covidSlice from "./Slices/covidSlice";
export const store = configureStore({
  reducer: {
    covid: covidSlice,
  },
});
