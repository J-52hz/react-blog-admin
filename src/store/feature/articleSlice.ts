import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getArticleList } from '../../api';

export const asyncGetArticleList: any = createAsyncThunk('tag/getTagList', async (state) => {
  console.log(state);
  // const res = await getArticleList();
  // if (res) {
  //   return res.data;
  // }
});

export interface ArticleData {
  count?: number;
  articleList?: any[];
  currentPage?: number;
  maxPage?: number;
}

interface InitialState {
  articleData: ArticleData;
}

const initialState: InitialState = {
  articleData: {}
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: {
    [asyncGetArticleList.fulfilled](state, { payload }) {
      state.articleData = payload;
    }
  }
});

export default articleSlice.reducer;
