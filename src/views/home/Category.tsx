import styled from 'styled-components';
import { useState } from 'react';
import { List, message, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { asyncGetCategoryByGroup } from '../../store/feature/categorySlice';
import { useDispatch } from 'react-redux';
import { addNewCategoryApi, updateCategory, deleteCategoryById } from '../../api';
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
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }
`;

interface CategoryListItem {
  ll_id: number;
  ll_category_val: number;
  ll_category_name: string;
  count: number;
}

interface Props {
  categoryList: CategoryListItem[];
}

const Category: React.FC<Props> = (props: Props) => {
  const [newCategoryName, setNewCategoryName] = useState('');
  const [isShowEditCategory, setIsShowEditCategory] = useState<boolean>(false);
  const [editIndex, setEditIndex] = useState<number>();
  const { categoryList } = props;
  const dispatch = useDispatch();

  //????????????
  const addCategory = async () => {
    const sameName = categoryList.find((i) => i.ll_category_name == newCategoryName);
    if (sameName) return message.warning('??????????????????');
    const ll_category_val = categoryList.length + 1;
    const params = {
      ll_category_name: newCategoryName,
      ll_category_val
    };
    const res = await addNewCategoryApi(params);
    if (res) {
      message.success('??????????????????');
      dispatch(asyncGetCategoryByGroup());
    }
  };

  // ????????????????????????????????????
  const editCategory = (index: number) => {
    return () => {
      setEditIndex(index);
      setIsShowEditCategory(true);
    };
  };

  // ????????????
  const cancelEdit = () => {
    setIsShowEditCategory(false);
  };

  // ????????????
  const confirmEdit = (newCategoryName: string) => {
    return async () => {
      const params = {
        ll_category_val: categoryList[editIndex!].ll_category_val,
        ll_category_name: newCategoryName
      };
      const res = await updateCategory(params);
      if (res) {
        message.success('??????????????????');
        dispatch(asyncGetCategoryByGroup());
        setIsShowEditCategory(false);
      }
    };
  };

  // ????????????
  const deleteCategory = async (ll_id: number) => {
    const res = await deleteCategoryById({ ll_id });
    if (res) {
      message.success('????????????');
      dispatch(asyncGetCategoryByGroup());
    }
  };

  return (
    <CategoryContainer>
      <h1>??????</h1>
      <div className="add_category">
        <input type="text" value={newCategoryName} placeholder="?????????????????????" onChange={(e) => setNewCategoryName(e.target.value)} />
        <div className="confirm_button" onClick={addCategory}>
          ??????
        </div>
      </div>
      <div className="c_list">
        <EditCategory isShowEditCategory={isShowEditCategory} cancelEdit={cancelEdit} confirmEdit={confirmEdit} />
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
                <Popconfirm placement="top" title="??????????????????????????????" onConfirm={() => deleteCategory(item.ll_id)} okText="Yes" cancelText="No">
                  <DeleteOutlined className="classesDelete" />
                </Popconfirm>
              </div>
            </List.Item>
          )}
        />
      </div>
    </CategoryContainer>
  );
};

export default Category;
