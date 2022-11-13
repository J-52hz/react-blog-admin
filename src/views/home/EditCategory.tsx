import { useEffect, useState } from 'react';
import { Modal } from 'antd';
import styled from 'styled-components';

const InputContainer = styled.div`
  input {
    width: 100%;
    text-align: left;
    height: 36px;
    font-size: 16px;
    padding: 0 10px;
    border: 1px solid #ccc;
    transition: all 0.3s;
  }
  &:hover {
    box-shadow: 0 0 4px #1890ff;
  }
`;

interface EditCategory {
  isShowEditCategory: boolean;
  cancelEdit: () => void;
  confirmEdit: (e: string) => () => void;
}

const EditCategory: React.FC<EditCategory> = (props: EditCategory) => {
  const { isShowEditCategory, cancelEdit, confirmEdit } = props;
  const [categoryName, setCategoryName] = useState<string>('');

  useEffect(() => {
    console.log(props);
  }, [isShowEditCategory]);

  return (
    <Modal title="修改分类" centered open={isShowEditCategory} onOk={confirmEdit(categoryName)} onCancel={cancelEdit} width={400} okText="确认" cancelText="取消">
      <InputContainer>
        <input type="text" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
      </InputContainer>
    </Modal>
  );
};

export default EditCategory;
