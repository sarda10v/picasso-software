import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCompanies = createAsyncThunk(
  "companies/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(
        `https://autocomplete.clearbit.com/v1/companies/suggest?query=segment`
      );
      const data = await res.json();
      if (data.error) {
        return thunkAPI.rejectWithValue(data.error);
      } else {
        return thunkAPI.fulfillWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const companiesSlice = createSlice({
  name: "companies",
  initialState: {
    companies: [],
    loader: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.fulfilled, (state, action) => {
        state.loader = false;
        state.companies = action.payload;
      })
      .addCase(fetchCompanies.pending, (state, action) => {
        state.loader = true;
      });
  },
});

export default companiesSlice.reducer;
