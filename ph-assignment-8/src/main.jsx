import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Roots from "./components/Roots/Roots";
import Errorpage from "./components/Errorpage/Errorpage";
import Home from "./components/Home/Home";
import GadgetsDetails from "./components/GadgetsDetails/GadgetsDetails";
import CartContext from './components/CartContext/CartContext';
import DashBoard from "./components/DashBoard/DashBoard";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement:<Errorpage ></Errorpage >,
    children:[
      {
        path:'home/',
        element:<Home></Home>
      },
      {
        path:'dash/',
        element:<DashBoard></DashBoard>

      },
    {
      path: 'details/:product_id',
      element: <GadgetsDetails />,
      loader: async () => {
        const response = await fetch('/gadgetsData.json');
        if (!response.ok) {
          throw new Error('Failed to load data');
        }
        return response.json();
      }
     },
      
    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   
   <CartContext>
   <RouterProvider router={router} />
   </CartContext>
 
  </React.StrictMode>
);
