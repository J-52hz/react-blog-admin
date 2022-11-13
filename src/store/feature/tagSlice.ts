import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllTag } from '../../api';

export const asyncGetTagList: any = createAsyncThunk('tag/getTagList', async () => {
  const res = await getAllTag();
  if (res) {
    return res.data;
  }
});

export interface TagListItem {
  ll_id: number;
  ll_tag_name: string;
  ll_tag_val: number;
  ll_tag_color?: string;
}
interface InitialState {
  tagList: TagListItem[];
}

const initialState: InitialState = {
  tagList: []
};

const tagSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {},
  extraReducers: {
    [asyncGetTagList.fulfilled](state, { payload }) {
      state.tagList = payload;
    }
  }
});

export default tagSlice.reducer;
