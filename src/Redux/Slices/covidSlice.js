import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCovidData = createAsyncThunk(
  "covid/fetchCovidData",
  async (countryName) => {
    const res = await fetch(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/countries/${countryName}`
    ).then((data) => data.json());

    return res;
  }
);

export const covidSlice = createSlice({
  name: "covid",
  initialState: {
    confirmed: "",
    recovered: "",
    deaths: "",
    isLoading: true,
    error: "",
  },
  reducers: {},
  extraReducers: {
    [fetchCovidData.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCovidData.error]: (state, action) => {
      state.error = action.error.message;
    },
    [fetchCovidData.fulfilled]: (state, action) => {
      state.confirmed = action.payload.confirmed.value;
      state.recovered = action.payload.recovered.value;
      state.deaths = action.payload.deaths.value;
      state.isLoading = false;
    },
  },
});

export default covidSlice.reducer;
