import { createSlice } from "@reduxjs/toolkit";
const honeSlice = createSlice({
  name: "home",
  initialState: {
    url: {},
    genres: {},
  },
  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});
export const { getApiConfiguration, getGenres } = honeSlice.actions;
export default honeSlice.reducer;
