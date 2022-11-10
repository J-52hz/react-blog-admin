import { Layout } from 'antd';
import React from 'react';
import Slider from './Slider';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const { Header, Content, Footer } = Layout;

const LayoutPage: React.FC = () => (
  <Layout style={{ height: '100%' }}>
    <Slider />
    <Layout>
      <Header className="site-layout-sub-header-background" style={{ padding: 0, background: '#fff' }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 0, minHeight: 360, height: '100%' }}>
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
);

export default LayoutPage;
