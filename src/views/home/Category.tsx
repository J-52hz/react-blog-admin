import styled from 'styled-components';
import { List, Modal, message, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const CategoryContainer = styled.div`
  flex: 1 1 0;
  height: 100%;
  background-color: #fff;
  margin-left: 20px;
  padding: 15px 10px 0;
  h1 {
    font-size: 20px;
  }
  .add_category {
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
  .c_list {
    .left_box {
      display: flex;
      align-items: center;
      .c_count {
        width: 22px;
        height: 22px;
        line-height: 22px;
        text-align: center;
        border-radius: 50%;
        color: #fff;
        background-color: rgb(24, 144, 255);
      }
      .c_name {
        font-size: 16px;
        margin-left: 16px;
      }
    }
    .operate {
      .edit {
        margin-right: 10px;
        font-size: 18px;
      }
      .delete {
        font-size: 18px;
      }
    }
  }
`;

const Category = () => {
  const c_list = [
    {
      id: 1,
      name: '博客相关',
      count: 3
    },
    {
      id: 2,
      name: '博客相关',
      count: 3
    },
    {
      id: 3,
      name: '博客相关',
      count: 3
    },
    {
      id: 4,
      name: '博客相关',
      count: 3
    },
    {
      id: 5,
      name: '博客相关',
      count: 3
    }
  ];

  return (
    <CategoryContainer>
      <h1>分类</h1>
      <div className="add_category">
        <input type="text" placeholder="请输入新的分类" />
        <div className="confirm_button">新建</div>
      </div>
      <div className="c_list">
        <List
          dataSource={c_list}
          renderItem={(item: any) => (
            <List.Item key={item.id}>
              <div className="left_box">
                <div className="c_count">{item.count}</div>
                <div className="c_name">{item.name}</div>
              </div>
              <div className="operate">
                <EditOutlined className="edit" />
                <DeleteOutlined className="delete" />
              </div>
            </List.Item>
          )}
        />
      </div>
    </CategoryContainer>
  );
};

export default Category;
