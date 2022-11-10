import React from 'react';
import styled from 'styled-components';

const WritingContainer = styled.section`
  height: 100%;
  background-color: #fff;
`;

const Write: React.FC = (props: any) => {
  return (
    <WritingContainer>
      <div>writing</div>
    </WritingContainer>
  );
};

export default Write;
