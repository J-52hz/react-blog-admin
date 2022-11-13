import React, { useEffect } from 'react';
import Welcome from './Welcome';
import TimeInfo from './TimeInfo';
import styled from 'styled-components';
import ArticleStatistics from './ArticleStatistics';
import PieChart from './PieChart';
import Category from './Category';
import Tag from './Tag';
import { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { asyncGetCategoryByGroup } from '../../store/feature/categorySlice';
import { asyncGetTagList } from '../../store/feature/tagSlice';

const OutlineBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 140px;
`;

const DataOverview = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 545px;
  margin-top: 80px;
`;

const Home: React.FC = () => {
  const { categoryList } = useSelector((state: RootState) => state.category);
  const { tagList } = useSelector((state: RootState) => state.tag);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetCategoryByGroup());
    dispatch(asyncGetTagList());
  }, []);
  return (
    <>
      <OutlineBox>
        <Welcome />
        <TimeInfo />
        <ArticleStatistics />
      </OutlineBox>
      <DataOverview>
        <PieChart categoryList={categoryList} />
        <Category categoryList={categoryList} />
        <Tag tagList={tagList} />
      </DataOverview>
    </>
  );
};

export default Home;
