import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import Posts, { loader } from "./routes/Posts";
import NewPost, { action} from "./routes/new-post";
import LayoutRoute from "./routes/root-layout";


const router = createBrowserRouter([
  { path: "/", element: <LayoutRoute />, children: [
    { path: "/", 
      element: <Posts />,
      loader: loader,
      children: [
      { path: "/create-post", element: <NewPost />, action: action }
    ] },
    
  ]},
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
