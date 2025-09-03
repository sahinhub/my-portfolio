import React from 'react';
import { createBrowserRouter } from "react-router";
import Home from '../pages/Home';
import App from '../App.jsx';
import About from '../pages/AboutMe';
import ContactPage from '../pages/ContactPage';
import ProjectsPage from '../pages/ProjectsPage';
import ErrorPage from '../pages/ErrorPage';
import Service from '../pages/Service.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/about-me',
            element:<About></About>
        },
        {
            path:'/contact-me',
            element:<ContactPage></ContactPage>
        },
        {
            path:'/services',
            element:<Service></Service>
        },
        {
            path:'/projects',
            element:<ProjectsPage></ProjectsPage>
        },

    ]
  },
]);

export default router;