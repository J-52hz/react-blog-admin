import React, { useEffect, useState } from 'react';
import { ArticleContainer, WritingContainer } from './style';
import Header from './Header';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import marked from '../../utils/markdown';
import { message } from 'antd';
import { NewArticle, publishArticle, getSingleArticle } from '../../api';
import { useLocation } from 'react-router';
import { ArticleData } from '../../store/feature/articleSlice';

const Write: React.FC = () => {
  const [articleContent, setArticleContent] = useState(''); //markdown的编辑内容
  const [editArticle, setEditArticle] = useState('');

  const { categoryList } = useSelector((state: RootState) => state.category);
  const { tagList } = useSelector((state: RootState) => state.tag);
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      // console.log(location.state.ll_id);
      getEditArticle(location.state.ll_id);
    }
  }, []);

  // 获取当前编辑的文章
  const getEditArticle = async (ll_id: number) => {
    const res = await getSingleArticle({ ll_id });
    if (res) {
      // setEditArticle;
    }
  };

  // 新发布文章
  const addArticle = async (params: NewArticle) => {
    if (!articleContent || articleContent.length == 0) return message.warning('文章内容不能为空');
    params.ll_content = articleContent;
    params.ll_content_html = marked(articleContent);

    const res = await publishArticle(params);
    if (res) {
      message.success('文章发布成功');
    }
  };

  return (
    <WritingContainer>
      <Header categoryList={categoryList} tagList={tagList} addArticle={addArticle} />
      <ArticleContainer>
        <div className="inputPane" onChange={(e: any) => setArticleContent(e.target.value)}>
          <textarea></textarea>
        </div>
        <div
          className="preview"
          dangerouslySetInnerHTML={{
            __html: marked(articleContent)
          }}
        ></div>
      </ArticleContainer>
    </WritingContainer>
  );
};

export default Write;
