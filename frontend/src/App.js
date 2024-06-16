import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Fav from './pages/Fav';
import Addmovie from './pages/Addmovie'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    createBrowserRouter,
  } from "react-router-dom";
import './App.css';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/fav",
      element: <Fav/>,
    },

    {
      path: "/addmovie",
      element: <Addmovie/>,
    },
  ]);

export default router;
