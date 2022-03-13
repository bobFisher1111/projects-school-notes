import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Tutorials from '../pages/Tutorials';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Contact from '../pages/Contact';
import Logout from '../pages/Logout';
import JavaScriptTutorial from '../components/javaScriptTutorials/JavaScriptTutorial';
import DataTutorial from '../components/dataTutorials/DataTutorials';

type Route = {
  path?: string;
  element?: any;
};

const routes: Route[] = [
  {
    path: '/',
    element: Home,
  },
  {
    path: '/about',
    element: About,
  },
  {
    path: '/tutorial',
    element: Tutorials,
  },
  {
    path: '/javascripttutorial',
    element: JavaScriptTutorial,
  },
  {
    path: '/dashboard',
    element: Dashboard,
  },
  {
    path: '/profile',
    element: Profile,
  },
  {
    path: '/contact',
    element: Contact,
  },
  {
    path: '/logout',
    element: Logout,
  },
  // 
  {
    path: '/datatutorials',
    element: DataTutorial,
  },
];

export default routes;

