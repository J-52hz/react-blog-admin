import React, { lazy } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
const Home = lazy(() => import('../layout'));

const suspenseComp = (comp: JSX.Element) => {
  return <React.Suspense fallback={<div>loading</div>}>{comp}</React.Suspense>;
};

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: suspenseComp(<Home />)
  }
];

export default routes;
