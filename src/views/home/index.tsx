import React from 'react';
import Welcome from './Welcome';
import TimeInfo from './TimeInfo';
import styled from 'styled-components';
import ArticleStatistics from './ArticleStatistics';
import PieChart from './PieChart';
import Category from './Category';
import Tag from './Tag';

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
  margin-top: 50px;
`;

const Home: React.FC = () => {
  return (
    <>
      <OutlineBox>
        <Welcome />
        <TimeInfo />
        <ArticleStatistics />
      </OutlineBox>
      <DataOverview>
        <PieChart />
        <Category />
        <Tag />
      </DataOverview>
    </>
  );
};

export default Home;
