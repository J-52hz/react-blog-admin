import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  data: any[];
}

const initialState: InitialState = {
  data: [
    {
      id: 16,
      name: 'react18版博客',
      desc: '基于react18及相关技术栈实现的博客',
      bg_url: 'https://resource.hsslive.cn/image/18d5f04a01ceb5189e7602f443e8cf0b.webp',
      url: 'http://project.hsslive.cn/react18-blog-client/',
      priority: null,
      status: 1,
      created_at: '2022-10-16 22:01:27',
      updated_at: '2022-10-31 18:07:57',
      deleted_at: null
    },
    {
      id: 15,
      name: 'billd私有仓库',
      desc: 'lerna+pnpm+verdaccio搭建的私有仓库',
      bg_url: 'https://resource.hsslive.cn/image/e6cb948d93d12d35244f3c98f9021f2e.webp',
      url: 'http://registry.hsslive.cn/',
      priority: null,
      status: 1,
      created_at: '2022-10-08 11:26:41',
      updated_at: '2022-10-08 11:26:41',
      deleted_at: null
    },
    {
      id: 14,
      name: 'billd-cli',
      desc: '一个快速创建项目脚手架',
      bg_url: 'https://resource.hsslive.cn/image/77a26d314b1bf7abd894e5f8bb4d78c0.webp',
      url: 'https://github.com/galaxy-s10/billd-cli',
      priority: null,
      status: 1,
      created_at: '2022-07-31 23:45:06',
      updated_at: '2022-10-16 22:23:10',
      deleted_at: null
    },
    {
      id: 13,
      name: 'billd-monorepo',
      desc: '基于rollup+pnpm搭建的billd-monorepo',
      bg_url: 'https://resource.hsslive.cn/image/1659282130802monorepo.jpg',
      url: 'http://project.hsslive.cn/billd-monorepo/',
      priority: null,
      status: 1,
      created_at: '2022-07-31 23:43:51',
      updated_at: '2022-07-31 23:43:51',
      deleted_at: null
    },
    {
      id: 12,
      name: 'demo项目的beta环境',
      desc: 'jenkins构建的demo项目的beta环境',
      bg_url: 'https://resource.hsslive.cn/image/1613141138717Billd.webp',
      url: 'http://project.hsslive.cn/multi-env-project/beta/',
      priority: 1,
      status: 1,
      created_at: '2022-05-04 02:25:04',
      updated_at: '2022-05-04 02:25:04',
      deleted_at: null
    },
    {
      id: 11,
      name: 'demo项目的preview环境',
      desc: 'jenkins构建的demo项目的preview环境',
      bg_url: 'https://resource.hsslive.cn/image/1613141138717Billd.webp',
      url: 'http://project.hsslive.cn/multi-env-project/preview/',
      priority: 1,
      status: 1,
      created_at: '2022-05-04 02:24:51',
      updated_at: '2022-05-04 02:24:51',
      deleted_at: null
    },
    {
      id: 10,
      name: 'demo项目的prod环境',
      desc: 'jenkins构建的demo项目的prod环境',
      bg_url: 'https://resource.hsslive.cn/image/1613141138717Billd.webp',
      url: 'http://project.hsslive.cn/multi-env-project/prod/',
      priority: 1,
      status: 1,
      created_at: '2022-05-04 02:24:12',
      updated_at: '2022-05-04 02:24:12',
      deleted_at: null
    },
    {
      id: 9,
      name: 'vue脚手架demo',
      desc: '使用webpack5从0搭建vue的脚手架',
      bg_url: 'https://cli.vuejs.org/favicon.png',
      url: 'http://project.hsslive.cn/vue3-webpack5-template/',
      priority: 1,
      status: 1,
      created_at: '2022-04-21 21:03:02',
      updated_at: '2022-04-21 21:03:02',
      deleted_at: null
    },
    {
      id: 8,
      name: 'netease-cloud-music',
      desc: '使用react仿网易云官网',
      bg_url: 'https://upload.wikimedia.org/wikipedia/zh/7/72/NetEase_Music_icon.png',
      url: 'http://project.hsslive.cn/netease-cloud-music/',
      priority: 1,
      status: 1,
      created_at: '2022-03-16 20:44:32',
      updated_at: '2022-03-16 20:44:34',
      deleted_at: null
    },
    {
      id: 7,
      name: 'overview',
      desc: '使用umi搭建的个人资料整理网站',
      bg_url: 'https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png',
      url: 'http://project.hsslive.cn/overview/',
      priority: 1,
      status: 1,
      created_at: '2022-03-16 20:44:32',
      updated_at: '2022-03-16 20:44:34',
      deleted_at: null
    }
  ]
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {}
});

export default dataSlice.reducer;
