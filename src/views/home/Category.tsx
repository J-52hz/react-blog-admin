import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { List, Modal, message, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { asyncGetCategoryByGroup, addNewCategory } from '../../store/feature/categorySlice';
import { useDispatch, useSelector } from 'react-redux';
import { addNewCategoryApi } from '../../api';
import EditCategory from './EditCategory';

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

interface CategoryListItem {
  ll_id: number;
  ll_category_val: number;
  ll_category_name: string;
  count: number;
}

const Category: React.FC = () => {
  const [newCategoryName, setNewCategoryName] = useState('');
  const [isShowEditCategory, setIsShowEditCategory] = useState<boolean>(false);
  const [categoryItem, setCategoryItem] = useState<object | undefined>();
  const { categoryList } = useSelector((state: any) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetCategoryByGroup());
  }, []);

  //新建分类
  const addCategory = async () => {
    const ll_category_val = categoryList.length + 1;
    const params = {
      ll_category_name: newCategoryName,
      ll_category_val
    };
    const res = await addNewCategoryApi(params);
    if (res) {
      dispatch(asyncGetCategoryByGroup());
    }
  };

  const editCategory = (index: number) => {
    return () => {
      setCategoryItem(categoryList[index]);
      setIsShowEditCategory(!isShowEditCategory);
    };
  };

  return (
    <CategoryContainer>
      <h1>分类</h1>
      <div className="add_category">
        <input type="text" value={newCategoryName} placeholder="请输入新的分类" onChange={(e) => setNewCategoryName(e.target.value)} />
        <div className="confirm_button" onClick={addCategory}>
          新建
        </div>
      </div>
      <div className="c_list">
        <EditCategory isShowEditCategory={isShowEditCategory} categoryItem={categoryItem} />
        <List
          dataSource={categoryList}
          renderItem={(item: CategoryListItem, index) => (
            <List.Item key={item.ll_category_val}>
              <div className="left_box">
                <div className="c_count">{item.count}</div>
                <div className="c_name">{item.ll_category_name}</div>
              </div>
              <div className="operate">
                <EditOutlined className="edit" onClick={editCategory(index)} />
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
