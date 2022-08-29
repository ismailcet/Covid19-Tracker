import { createSlice } from "@reduxjs/toolkit";

export const countrySlice = createSlice({
  name: "country",
  initialState: {
    countries: [],
  },
  reducers: {},
});
export default countrySlice.reducer;
