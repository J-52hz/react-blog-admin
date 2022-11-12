import axios from './request';

// 登录
interface LoginInfo {
  ll_username: string;
  ll_password: string;
}
export const loginAdmin = (params: LoginInfo) => {
  return axios.post('/api/auth/login', params);
};

// 按分组获取分类
export const getCategoryByGroup = () => {
  return axios.post('/api/category/getCategoryByGroup');
};

// 新建分类
interface NewCategory {
  ll_category_val: number;
  ll_category_name: string;
}
export const addNewCategoryApi = (params: NewCategory) => {
  return axios.post('/api/category/addCategory', params);
};
