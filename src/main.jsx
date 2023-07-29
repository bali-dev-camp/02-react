import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import articleRoutes from './article.route';

import Root from './routes/root';
import PageHome from './routes/home';
import PageAbout from './routes/about';
import PageContact from './routes/contact';
import PageError from './routes/error-page';
import PageArticleDetail from './routes/article-detail';

import "normalize.css"
import "./main.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <PageError />,
    children: [
      {
        index: true,
        element: <PageHome />
      },
      {
        path: "about",
        element: <PageAbout />,
        children: [
          {
            path: "singaraja",
            element: <h1>Singaraja</h1>
          },
          {
            path: "denpasar",
            element: <h1>Denpasar</h1>
          },
          {
            path: "karangasem",
            element: <h1>Karangasem</h1>
          }
        ]
      },
      {
        path: "contact",
        element: <PageContact />
      },
      {
        path: "articles/:id",
        element: <PageArticleDetail />
      },
      ...articleRoutes,
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
