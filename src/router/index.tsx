import React, { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
const Layout = lazy(() => import('../layout'));
const Home = lazy(() => import('../views/home'));
const Article = lazy(() => import('../views/article'));
const Write = lazy(() => import('../views/Write'));

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
    element: suspenseComp(<Layout />),
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
        path: 'write',
        element: suspenseComp(<Write />)
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/admin/home" />
  }
];

export default routes;
