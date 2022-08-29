import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./Slices/countrySlice";
import covidSlice from "./Slices/covidSlice";
export const store = configureStore({
  reducer: {
    countries: countrySlice,
    covid: covidSlice,
  },
});
