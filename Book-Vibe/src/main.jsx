import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Root } from 'postcss';
import Roots from './components/Roots/Roots';
import Errorpage from './components/Errorpage/Errorpage';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import BookDetail from './components/BookDetail/BookDetail';
import ListedBooks from './components/ListedBooks/ListedBooks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement:<Errorpage></Errorpage>,
    children:[
     {
      path:'/home',
      element:<Home></Home>,
     },
     {
      path:'books/:bookId',
      element:<BookDetail></BookDetail>,
      loader:()=> fetch('/booksData.json')

     },
     {
      path:'listedBooks',
      element:<ListedBooks></ListedBooks>,
      loader:()=>fetch('/booksData.json')

     },
     {
      path:'dashboard',
      element:<Dashboard></Dashboard>
     },
   
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
