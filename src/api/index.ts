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

// 编辑分类
export const updateCategory = (params: NewCategory) => {
  return axios.post('/api/category/updateCategory', params);
};

// 删除分类
interface CategoryId {
  ll_id: number;
}
export const deleteCategoryById = (params: CategoryId) => {
  return axios.post('/api/category/removeCategory', params);
};

// 获取所有标签
export const getAllTag = () => {
  return axios.post('/api/tag/getAllTag');
};

// 新建标签
interface newTag {
  ll_tag_val: number;
  ll_tag_name: string;
}
export const addNewTag = (params: newTag) => {
  return axios.post('/api/tag/addTag', params);
};

// 删除标签
interface TagId {
  ll_id: number;
}
export const removeTag = (params: TagId) => {
  return axios.post('/api/tag/removeTag', params);
};

// 获取文章列表
interface Pagination {
  pageNum: number;
  pageSize: number;
  ll_title?: string;
  ll_category?: string;
}
export const getArticleList = (params: Pagination) => {
  return axios.post('/api/article/getArticleList', params);
};

// 创建文章
export interface NewArticle {
  ll_title: string;
  ll_titleEng: string;
  ll_introduce: string;
  ll_content: string;
  ll_content_html: string;
  ll_category: number;
  ll_tags: string;
}
export const publishArticle = (params: NewArticle) => {
  return axios.post('/api/article/publish', params);
};

// 删除文章
type ArticleId = {
  ll_id: number;
};
export const deleteArticle = (params: ArticleId) => {
  return axios.post('/api/article/remove', params);
};

// 获取单篇文章
export const getSingleArticle = (params: ArticleId) => {
  return axios.post('/api/article/getSingleArticle', params);
};
