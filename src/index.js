import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';

const HomePage = React.lazy(() => import('./pages/HomePage'))
const UserPage = React.lazy(() => import('./pages/UserPage'));
const SubscriptionPage = React.lazy(() => import('./pages/SubscriptionPage'));
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const TvPage = React.lazy(() => import('./pages/TvPage'));
const MoviePage = React.lazy(() => import('./pages/MoviePage'));
const WatchPage = React.lazy(() => import('./pages/WatchPage'));


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
  <>
    <Suspense fallback={<div>loading.....</div>} >
      <RouterProvider router={appRouter} />
    </Suspense>
  </>
);
reportWebVitals();
