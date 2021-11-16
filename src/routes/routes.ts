import  React  from 'react';
import Login from '../pages/Login';
import Events from '../pages/Events';

//creating routes type
export type IRoute = {
    path: string,
    component: React.ComponentType,
    exact?: boolean,
};

//enums 4 easy changing routes path
export enum RouteNames {
    LOGIN = '/login',
    EVENTS = '/'
};

export const privateRoutes: IRoute[] = [
    {path: RouteNames.EVENTS, exact: true, component: Events}
];

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, exact: true, component: Login}
];

