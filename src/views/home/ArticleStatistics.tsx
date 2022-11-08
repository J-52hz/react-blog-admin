import StatisticalBox from './components/StatisticalBox';

const ArticleStatistics = () => {
  const props = {
    num: 20,
    title: '文章数'
  };
  return <StatisticalBox {...props} />;
};

export default ArticleStatistics;
