import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getArticleList } from '../../api';

export interface ArticleData {
  count?: number;
  articleList?: any[];
  currentPage?: number;
  maxPage?: number;
}
export interface pagination {
  pageNum: number;
  pageSize: number;
  total?: number;
  current?: number;
}

interface InitialState {
  articleData: ArticleData;
  pagination: pagination;
  loading: boolean;
}

const initialState: InitialState = {
  //文章数据
  articleData: {},
  // 页码参数
  pagination: {
    pageNum: 1,
    pageSize: 10
  },
  // 获取文章时展示loading
  loading: false
};

export const asyncGetArticleList: any = createAsyncThunk('tag/asyncGetArticle', async (Pagination: pagination) => {
  const res = await getArticleList(Pagination);
  if (res) {
    return res.data;
  }
});

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    changePagination(state, { payload }) {
      state.pagination.pageNum = payload;
    },
    changeLoading(state, { payload }) {
      state.loading = payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(asyncGetArticleList.fulfilled, (state, { payload }) => {
      state.articleData = payload;
      state.pagination.total = payload.count;
      state.loading = false;
    });
  }
});

export const { changePagination, changeLoading } = articleSlice.actions;

export default articleSlice.reducer;
