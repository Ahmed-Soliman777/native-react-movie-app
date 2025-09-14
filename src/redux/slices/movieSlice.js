import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    items: [],
    page: 1,
  },
  reducers: {
    setMovies: (state, action) => {
      state.items = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setMovies, setPage } = moviesSlice.actions;
export default moviesSlice.reducer;
