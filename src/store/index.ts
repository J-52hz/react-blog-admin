import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './feature/dataSlice';

export default configureStore({
  reducer: {
    data: dataSlice
  }
});
