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
import Main from "./components/layout/Main.jsx";
import Home from "./components/Home/Home.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import SignIn from "./components/SigIn/SignIn.jsx"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>

      },
      {
        path:'log/',
        element:<Login></Login>
      },
      {
        path:'signUp',
        element:<SignUp></SignUp>
      },
      {
        path:'login',
        element:<SignIn></SignIn>
      }
    ]
    
  },
 
]);
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
