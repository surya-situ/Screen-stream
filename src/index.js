import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import SubscriptionPage from './pages/SubscriptionPage';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import TvPage from './pages/TvPage';
import MoviePage from './pages/MoviePage';
import CategoryPage from './pages/CategoryPage';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/subscriptionPage',
        element: <SubscriptionPage />
      },
      {
        path: '/userPage',
        element: <UserPage />
      },
      {
        path: '/searchPage',
        element: <SearchPage />
      },
      {
        path: '/tvPage',
        element: <TvPage />
      },
      {
        path: '/moviePage',
        element: <MoviePage />
      },
      {
        path: '/categoryPage',
        element: <CategoryPage />
      },
      {
        path: '/loginPage',
        element: <LoginPage />
      },
      
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter} />
);
reportWebVitals();
