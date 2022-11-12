import React, { useEffect } from 'react';
import { useRoutes, useLocation, useNavigate } from 'react-router-dom';
import routes from './router/index';
import { message } from 'antd';

const ToAdminHome: React.FC = () => {
  const navigateTo = useNavigate();
  useEffect(() => {
    navigateTo('/admin/home');
  }, []);
  return <div></div>;
};

const ToLogin: React.FC = () => {
  const navigateTo = useNavigate();
  useEffect(() => {
    navigateTo('/admin/login');
    message.warning('您还没有登陆，请登陆');
  }, []);
  return <div></div>;
};

const RouterBeforeEnter = () => {
  const outlet = useRoutes(routes);
  const location = useLocation();
  const token = localStorage.getItem('userToken');

  /**
   * 如果路由路径为login，且存在token，跳转到首页
   */
  if (location.pathname == '/admin/login' && token) {
    return <ToAdminHome />;
  }

  /**
   * 如果路径不为login，且不存在token，跳转到登录页
   */
  if (location.pathname != '/admin/login' && !token) {
    return <ToLogin />;
  }

  return outlet;
};

function App() {
  return (
    <div className="App">
      <RouterBeforeEnter />
    </div>
  );
}

export default App;
