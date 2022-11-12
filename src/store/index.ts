import { configureStore } from '@reduxjs/toolkit';
import articleSlice from './feature/articleSlice';
import categorySlice from './feature/categorySlice';

export default configureStore({
  reducer: {
    article: articleSlice,
    category: categorySlice
  }
});
