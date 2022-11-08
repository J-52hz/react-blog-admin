// 统计

import styled from 'styled-components';

interface statisticsProps {
  num: number;
  title: string;
}

const Container = styled.div`
  flex: 1 1 0;
  margin-left: 20px;
  background: #fff;
  padding: 20px;
  h1 {
    font-size: 20px;
  }
  p {
    text-align: center;
    font-size: 80px;
    color: #1890ff;
  }
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }
`;

const StatisticalBox: React.FC<statisticsProps> = (props: statisticsProps) => {
  return (
    <Container>
      <h1>{props.title}</h1>
      <p>{props.num}</p>
    </Container>
  );
};

export default StatisticalBox;
