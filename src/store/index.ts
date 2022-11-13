import { configureStore } from '@reduxjs/toolkit';
import articleSlice from './feature/articleSlice';
import categorySlice from './feature/categorySlice';
import tagSlice from './feature/tagSlice';

const store = configureStore({
  reducer: {
    article: articleSlice,
    category: categorySlice,
    tag: tagSlice
  }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
