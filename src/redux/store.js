import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import moviesSlice from "./slices/moviesSlice";
import gptSlice from "./slices/gptSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesSlice,
    gpt: gptSlice,
  },
});

export default store;
