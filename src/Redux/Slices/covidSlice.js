import { createSlice } from "@reduxjs/toolkit";

export const covidSlice = createSlice({
  name: "covid",
  initialState: {
    confirmed: "",
    recovered: "",
    deaths: "",
  },
  reducers: {},
});

export default covidSlice.reducer;
