import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './componets/Layout';
import MainPage from './componets/pages/MainPage';
import CategoryPage from './componets/pages/CategoryPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
        {
          path: '/category/:categoryId',
          element: <CategoryPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
