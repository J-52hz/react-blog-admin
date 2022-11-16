import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCategoryByGroup } from '../../api';

interface InitialState {
  categoryList: any[];
}
const initialState: InitialState = {
  categoryList: []
};

// 获取分类列表
export const asyncGetCategoryByGroup: any = createAsyncThunk('category/asyncGetCategoryByGroup', async () => {
  const categoryList = await getCategoryByGroup();
  return categoryList;
});

export const categorySlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addNewCategory: (state, { payload }) => {
      state.categoryList = [payload, ...state.categoryList];
    }
  },
  extraReducers(builder) {
    builder.addCase(asyncGetCategoryByGroup.fulfilled, (state: InitialState, { payload }) => {
      if (payload) {
        state.categoryList = payload.data;
      }
    });
  }
});

export const { addNewCategory } = categorySlice.actions;

export default categorySlice.reducer;
