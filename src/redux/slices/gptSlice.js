import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "GPT",
  initialState: {
    showGptSearch: false,
    movieNames: null,
    gptMovies: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovies: (state, action) => {
      const { movieNames, moviesResults } = action.payload;
      state.movieNames = movieNames;
      state.gptMovies = moviesResults;
    },
  },
});

export const { toggleGptSearchView, addGptMovies } = gptSlice.actions;
export default gptSlice.reducer;
