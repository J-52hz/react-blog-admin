import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  articleList: any[];
}

const initialState: InitialState = {
  articleList: []
};

export const articleSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {}
});

export default articleSlice.reducer;
