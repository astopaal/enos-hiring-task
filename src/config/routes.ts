import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));

const _routes = [
    {
        path: '/',
        title: 'Ana Sayfa',
        component: Home
    },]

export default _routes;