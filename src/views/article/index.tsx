import React, { useEffect, useState } from 'react';
import { Space, Table, Tag, Button, Popconfirm, message } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { asyncGetArticleList, changePagination, changeLoading } from '../../store/feature/articleSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { formatDate } from '../../utils/filter';
import { tagColor } from '../../utils/tagColor';
import { deleteArticle } from '../../api';
import { useNavigate } from 'react-router-dom';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

interface DataType {
  ll_id: number;
  ll_title: string;
  ll_introduce: string;
  ll_category: string;
  ll_tags: string;
  ll_visitedCounts: number;
  ll_likedCounts: number;
  ll_cover: string;
  ll_createdTime: string;
  ll_updatedTime: string;
  ll_content: string;
  ll_content_html: string;
  category: {
    ll_category_name: string;
  };
}

const Article: React.FC = () => {
  const { articleData } = useSelector((state: RootState) => state.article);
  const { pagination } = useSelector((state: RootState) => state.article);
  const { loading } = useSelector((state: RootState) => state.article);

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  useEffect(() => {
    changeLoading(true);
    dispatch(asyncGetArticleList(pagination));
  }, [pagination.pageNum]);

  const handleTableChange = (pagination: TablePaginationConfig) => {
    changeLoading(true);
    dispatch(changePagination(pagination.current));
  };

  const columns: ColumnsType<DataType> = [
    {
      title: '标题',
      dataIndex: 'll_title',
      key: 'll_id',
      render: (text) => <a>{text}</a>
    },
    {
      title: '发布日期',
      dataIndex: 'll_createdTime',
      key: 'll_id',
      render: (date) => <a>{formatDate(date, 'YYYY-MM-DD')}</a>,
      sortDirections: ['descend'],
      defaultSortOrder: 'ascend'
    },
    {
      title: '分类',
      dataIndex: 'category',
      key: 'll_id',
      render: (category) => <a>{category.ll_category_name}</a>
    },
    {
      title: '标签',
      dataIndex: 'll_tags',
      key: 'll_id',
      render: (tags) => (
        <div className="tags">
          {JSON.parse(tags).map((tag: string, index: number) => {
            const color = tagColor[(index + 1) % tagColor.length];
            return (
              <Tag color={color} key={tag}>
                {tag}
              </Tag>
            );
          })}
        </div>
      )
    },
    {
      title: '操作',
      key: 'll_id',
      render: (record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => editArticle(record.ll_id)}>
            修改
          </Button>

          <Popconfirm
            placement="topRight"
            title="确定要删除该文章吗？"
            onConfirm={async () => {
              const res = await deleteArticle(record.ll_id);
              if (res) {
                message.success('删除文章成功');
              }
            }}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger>
              删除
            </Button>
          </Popconfirm>
        </Space>
      )
    }
  ];
  const editArticle = (ll_id: any) => {
    navigateTo('/admin/writing', { state: { ll_id } });
  };
  return (
    <Table
      size="large"
      className="Table"
      rowKey={(r) => r.ll_id}
      bordered
      columns={columns}
      dataSource={articleData.articleList}
      loading={loading}
      onChange={handleTableChange}
      pagination={{
        ...pagination
      }}
    />
  );
};
export default Article;
