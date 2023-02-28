import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './postsSlice';

const rootReducer = {
  posts: postsReducer
};

const store = configureStore({
  reducer: rootReducer
})

export default store;