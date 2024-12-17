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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement:<Errorpage ></Errorpage >,
    children:[
      {
        path:'home/',
        element:<Home></Home>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
