import { useEffect, useState } from 'react';
import { loginAdmin } from '../../api';
import { useNavigate } from 'react-router';
import { message } from 'antd';
import LoginContainer from './style';

const Login = () => {
  const [ll_username, setUsername] = useState('');
  const [ll_password, setPassword] = useState('');
  const navigateTo = useNavigate();

  const login = async () => {
    const loginInfo = {
      ll_username,
      ll_password
    };
    const res = await loginAdmin(loginInfo);
    if (res) {
      // 如果登陆成功，讲token和账号密码保存到localStorage中
      localStorage.setItem('userToken', res.data.token);
      localStorage.setItem('username', ll_username);
      localStorage.setItem('password', ll_password);
      message.success('登录成功');
      navigateTo('admin/home');
    }
  };

  useEffect(() => {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    if (username && password) {
      setUsername(username);
      setPassword(password);
    }
  }, []);

  return (
    <LoginContainer>
      <div className="login_panel">
        <div className="username">
          账号：<input placeholder="请输入用户名" value={ll_username} type="text" onChange={(e) => setUsername(e.target.value)}></input>
        </div>
        <div className="password">
          密码：<input placeholder="请输入密码" value={ll_password} type="password" onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <div className="bottom_box">
          <div className="register">注册</div>
          <div className="login" onClick={login}>
            登录
          </div>
        </div>
      </div>
    </LoginContainer>
  );
};

export default Login;
