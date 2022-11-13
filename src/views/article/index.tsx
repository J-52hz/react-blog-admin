import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { asyncGetArticleList } from '../../store/feature/articleSlice';
import { useDispatch } from 'react-redux';
import type { FilterValue, SorterResult } from 'antd/es/table/interface';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: string;
  sortOrder?: string;
  filters?: Record<string, FilterValue>;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    )
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    )
  }
];

const Article: React.FC = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10
    }
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetArticleList(tableParams.pagination));
  }, [[JSON.stringify(tableParams)]]);

  const handleTableChange = (pagination: TablePaginationConfig, filters: any, sorter: any) => {
    setTableParams({
      pagination,
      filters,
      ...sorter
    });
  };
  return <Table size="middle" className="Table" bordered columns={columns} dataSource={data} loading={loading} onChange={handleTableChange} />;
};
export default Article;
