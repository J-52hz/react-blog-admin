import React from 'react';
import Welcome from './Welcome';
import TimeInfo from './TimeInfo';
import styled from 'styled-components';
import ArticleStatistics from './ArticleStatistics';

const OutlineBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 140px;
`;

const Home: React.FC = () => {
  return (
    <>
      <OutlineBox>
        <Welcome />
        <TimeInfo />
        <ArticleStatistics />
      </OutlineBox>
    </>
  );
};

export default Home;
