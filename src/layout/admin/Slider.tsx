import React from 'react';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import type { MenuInfo } from '../../types';

const { Sider } = Layout;

// 菜单栏对象
const menuItems = [
  {
    key: '/admin/home',
    icon: React.createElement(UploadOutlined),
    label: '首页'
  },
  {
    key: '/admin/article',
    icon: React.createElement(UploadOutlined),
    label: '文章'
  },
  {
    key: '/admin/writing',
    icon: React.createElement(UserOutlined),
    label: '写文章'
  }
];

const Slider = () => {
  // 获取当前路由地址
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // 点击选中一个菜单
  const selectMenu = (info: MenuInfo) => {
    // 跳转到该菜单对应的路由页面
    navigate(info.key);
  };

  return (
    <Sider breakpoint="lg" collapsedWidth="0" className="sider">
      <div className="logo" style={{ height: '32px', margin: '16px', background: '#fff', textAlign: 'center', lineHeight: '32px' }}>
        博客后台管理
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[pathname]} items={menuItems} onClick={selectMenu} />
    </Sider>
  );
};

export default Slider;
