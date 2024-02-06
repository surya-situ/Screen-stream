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
import WatchPage from './pages/WatchPage';


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
        path: '/loginPage',
        element: <LoginPage />
      },
      {
        path: '/watch/:id',
        element: <WatchPage />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter} />
);
reportWebVitals();
