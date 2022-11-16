import { useState } from 'react';
import { message, Popconfirm } from 'antd';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { CloseOutlined } from '@ant-design/icons';

import { addNewTag, removeTag } from '../../api';
import { tagColor } from '../../utils/tagColor';
import { asyncGetTagList } from '../../store/feature/tagSlice';

import { TagListItem } from '../../store/feature/tagSlice';

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
  .tag_list {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .tag_itm {
      display: flex;
      justify-content: space-between;
      flex-shrink: 0;
      padding: 10px 10px;
      margin: 10px;
      color: #fff;
      span {
        margin-left: 10px;
      }
    }
  }
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }
`;

interface Props {
  tagList: TagListItem[];
}

const Tag: React.FC<Props> = (props: Props) => {
  const [newTagName, setNewTagName] = useState('');
  const dispatch = useDispatch();

  //新建标签
  const addCategory = async () => {
    const sameName = props.tagList.find((i) => i.ll_tag_name == newTagName);
    if (sameName) return message.warning('已有相同标签');
    const ll_tag_val = props.tagList.length + 1;
    const params = {
      ll_tag_name: newTagName,
      ll_tag_val
    };
    const res = await addNewTag(params);
    if (res) {
      message.success('成功新建分类');
      dispatch(asyncGetTagList());
    }
  };

  // 删除标签
  const deleteTag = async (ll_id: number) => {
    const res = await removeTag({ ll_id });
    if (res) {
      message.success('标签删除成功');
      dispatch(asyncGetTagList());
    }
  };

  return (
    <TagContainer>
      <h1>标签</h1>
      <div className="add_tag">
        <input type="text" placeholder="请输入新的标签" value={newTagName} onChange={(e) => setNewTagName(e.target.value)} />
        <div className="confirm_button" onClick={addCategory}>
          新建
        </div>
      </div>
      <ul className="tag_list">
        {props.tagList.map((item: TagListItem, index: number) => (
          <li className="tag_itm" key={item.ll_id} style={{ backgroundColor: tagColor[(index + 1) % tagColor.length] }}>
            {item.ll_tag_name}
            <Popconfirm placement="top" title="确定要删除该标签吗？" onConfirm={() => deleteTag(item.ll_id)} okText="Yes" cancelText="No">
              <CloseOutlined className="deleteTagBtn" />
            </Popconfirm>
          </li>
        ))}
      </ul>
    </TagContainer>
  );
};

export default Tag;
