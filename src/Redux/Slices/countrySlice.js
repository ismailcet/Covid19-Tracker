import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchCountry = createAsyncThunk(
  "country/fetchCountry",
  async () => {
    const res = await fetch(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/countries`
    ).then((data) => data.json());
    return res;
  }
);

export const countrySlice = createSlice({
  name: "country",
  initialState: {
    countries: null,
    isLoading: true,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [fetchCountry.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCountry.error]: (state, action) => {
      state.error = action.error.message;
    },
    [fetchCountry.fulfilled]: (state, action) => {
      state.countries = action.payload.countries;

      state.isLoading = false;
    },
  },
});
export default countrySlice.reducer;
