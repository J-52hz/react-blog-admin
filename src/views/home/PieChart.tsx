import { Pie } from '@ant-design/plots';
import styled from 'styled-components';

const PieContainer = styled.div`
  flex: 2 1 0;
  height: 100%;
  h1 {
    font-size: 20px;
    margin: 15px 0 0 20px;
  }
  background-color: #fff;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }
`;

const PieChart: React.FC = () => {
  const data = [
    {
      type: '分类一',
      value: 27
    },
    {
      type: '分类二',
      value: 25
    },
    {
      type: '分类三',
      value: 18
    },
    {
      type: '分类四',
      value: 15
    },
    {
      type: '分类五',
      value: 10
    },
    {
      type: '其他',
      value: 5
    }
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}'
    },
    interactions: [
      {
        type: 'pie-legend-active'
      },
      {
        type: 'element-active'
      }
    ]
  };
  return (
    <PieContainer>
      <h1>文章概览</h1>
      <Pie {...config}></Pie>
    </PieContainer>
  );
};

export default PieChart;
