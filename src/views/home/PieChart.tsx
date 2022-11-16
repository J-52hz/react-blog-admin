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

interface Props {
  categoryList: any[];
}

const PieChart: React.FC<Props> = (props: Props) => {
  const { categoryList } = props;

  const config = {
    appendPadding: 10,
    data: categoryList,
    angleField: 'count',
    colorField: 'll_category_name',
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
