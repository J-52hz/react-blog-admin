import React, { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
const Admin = lazy(() => import('../layout/admin'));
const Login = lazy(() => import('../layout/Login'));
const Home = lazy(() => import('../views/home'));
const Article = lazy(() => import('../views/article'));
const Write = lazy(() => import('../views/Writing'));

const suspenseComp = (comp: JSX.Element) => {
  return <React.Suspense fallback={<div>loading</div>}>{comp}</React.Suspense>;
};

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/admin/home" />
  },
  {
    path: '/admin',
    element: suspenseComp(<Admin />),
    children: [
      {
        path: 'home',
        element: suspenseComp(<Home />)
      },
      {
        path: 'article',
        element: suspenseComp(<Article />)
      },
      {
        path: 'writing',
        element: suspenseComp(<Write />)
      }
    ]
  },
  {
    path: '/admin/login',
    element: suspenseComp(<Login />)
  },
  {
    path: '*',
    element: <Navigate to="/admin/home" />
  }
];

export default routes;
