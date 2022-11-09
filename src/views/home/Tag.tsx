import styled from 'styled-components';

const TagContainer = styled.div`
  flex: 1 1 0;
  height: 100%;
  background-color: #fff;
  margin-left: 20px;
  padding: 15px 10px;
  h1 {
    font-size: 20px;
  }
  .add_tag {
    display: flex;
    margin: 14px 0;
    .confirm_button {
      width: 60px;
      height: 36px;
      line-height: 36px;
      text-align: center;
      font-size: 15px;
      color: #fff;
      background-color: rgb(24, 144, 255);
      margin-left: 10px;
    }
    input {
      flex: 1;
      height: 36px;
      border: 1px solid #ccc;
      padding-left: 10px;
    }
  }
`;

const Tag = () => {
  return (
    <TagContainer>
      <h1>标签</h1>
      <div className="add_tag">
        <input type="text" placeholder="请输入新的标签" />
        <div className="confirm_button">新建</div>
      </div>
    </TagContainer>
  );
};

export default Tag;
