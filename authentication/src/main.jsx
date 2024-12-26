import * as React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Login from "./components/Login/Login.jsx";
import Header from "./components/Header/Header.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    
  },
  {
    path:'login/',
    element:<Login></Login>
  },
]);
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
