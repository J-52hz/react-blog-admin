import { useEffect } from 'react';
//在index.js中引入axios
import axios from 'axios';
//引入qs模块，用来序列化post类型的数据
import QS from 'qs';
//antd的message提示组件，大家可根据自己的ui组件更改。
import { message } from 'antd';

// 引入history做路由跳转
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

//保存环境变量
const isPrd = process.env.NODE_ENV == 'production';

//区分开发环境还是生产环境基础URL
export const basciUrl = isPrd ? 'http://production.com' : 'http://127.0.0.1:9002';

//设置axios基础路径
const service = axios.create({
  baseURL: basciUrl
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 每次发送请求之前本地存储中是否存在token，也可以通过Redux这里只演示通过本地拿到token
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const token = window.localStorage.getItem('userToken') || window.sessionStorage.getItem('userToken');

    //设置请求头,在请求头中添加token
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      Authorization: token
    };
    //序列化请求参数，不然post请求参数后台接收不正常
    config.data = QS.stringify(config.data);
    return config;
  },
  (error) => {
    return error;
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response: any) => {
    //根据返回不同的状态码做不同的事情
    // 这里一定要和后台开发人员协商好统一的错误状态码
    if (!response.data.success) {
      message.error(response.data.msg);
    } else {
      return response.data;
    }
  },
  (error) => {
    const { response } = error;
    message.error(response.data.msg);
    if (response.data.state == 401) {
      localStorage.removeItem('userToken');
      history.push('/admin/login');
    }
    // if (response) {
    //   // 请求已发出，但是不在2xx的范围
    //   // errorHandle(response.status, response.data.message);
    //   return Promise.reject(response);
    // } else {
    //   // 处理断网的情况
    //   // eg:请求超时或断网时，更新state的network状态
    //   // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
    //   // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
    //   // store.commit('changeNetwork', false);
    // }
  }
);
//最后把封装好的axios导出
export default service;
