import { useEffect, useState } from 'react';
import { message, Select } from 'antd';
import { HeaderContainer } from './style';
import { TagListItem, asyncGetTagList } from '../../store/feature/tagSlice';
import { asyncGetCategoryByGroup } from '../../store/feature/categorySlice';
import { useDispatch } from 'react-redux';

const { Option } = Select;

interface Props {
  tagList: TagListItem[];
  categoryList: CategoryListItem[];
  addArticle: Function;
}

interface CategoryListItem {
  ll_id: number;
  ll_category_val: number;
  ll_category_name: string;
  count: number;
}

const Header: React.FC<Props> = (props: Props) => {
  const { tagList, categoryList } = props;
  const [title, setTitle] = useState<string>();
  const [titleEng, setTitleEng] = useState<string>();
  const [desc, setDesc] = useState<string>();
  const [selectedTags, setSelectTags] = useState<string[]>();
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (categoryList.length == 0 || tagList.length == 0) {
      dispatch(asyncGetTagList());
      dispatch(asyncGetCategoryByGroup());
    }
  }, []);

  // 选择分类
  const selectCategory = (name: string) => {
    const category = categoryList.find((c) => c.ll_category_name == name);
    setSelectedCategoryId(category?.ll_category_val);
  };

  const submit = () => {
    if (!title || title?.length == 0) {
      return message.warning('请输入中文标题');
    }
    if (!titleEng || titleEng?.length == 0) {
      return message.warning('请输入英文标题');
    }
    if (!selectedCategoryId) {
      return message.warning('请选择分类');
    }
    if (!selectedTags) {
      return message.warning('请选择标签');
    }

    const params = {
      ll_title: title,
      ll_titleEng: titleEng,
      ll_introduce: desc,
      ll_category: selectedCategoryId,
      ll_tags: JSON.stringify(selectedTags)
    };
    props.addArticle(params);
  };

  return (
    <>
      <HeaderContainer>
        <div className="title row">
          <span>标题</span>
          <input type="text" className="cn_title" placeholder="请输入中文标题" onChange={(e) => setTitle(e.target.value)} />
          <input type="text" className="en_title" placeholder="请输入英文标题" onChange={(e) => setTitleEng(e.target.value)} />
        </div>
        <div className="desc row">
          <span>描述</span>
          <input type="text" placeholder="描述" onChange={(e) => setDesc(e.target.value)} />
        </div>
        <div className="category">
          <span className="c_span">分类</span>
          <div className="select_c">
            <Select style={{ width: '100%' }} bordered={false} onChange={selectCategory}>
              {categoryList.map((c) => (
                <Option key={c.ll_id} value={c.ll_category_name}>
                  {c.ll_category_name}
                </Option>
              ))}
            </Select>
          </div>
        </div>
        <div className="tags ">
          <span className="t_span">标签</span>
          <div className="select_t">
            <Select mode="multiple" showSearch showArrow allowClear bordered={false} style={{ width: '100%' }} value={selectedTags} onChange={(value) => setSelectTags(value)}>
              {tagList.map((tags) => (
                <Option key={tags.ll_id} value={tags.ll_tag_name}>
                  {tags.ll_tag_name}
                </Option>
              ))}
            </Select>
          </div>
        </div>
        <div className="submit" onClick={submit}>
          提交
        </div>
      </HeaderContainer>
    </>
  );
};

export default Header;
