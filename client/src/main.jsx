import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'
import './index.css'

import App from './App.jsx'

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import SingleThought from './pages/SingleThought';
import Profile from './pages/Profile';
import Favorites from './pages/Favorites';
import Error from './pages/Error';
import Mocktails from './pages/Mocktails';
import Drinks from './pages/Drinks';
import Spirits from './pages/Spirits';
import Beer from './pages/Beer';
import ChileLimeSublime from './pages/ChileLimeSublime';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/me',
        element: <Profile />
      }, 
      {
        path: '/favorites',
        element: <Favorites />
      },

      {
        path: '/drinks',
        element: <Drinks />
      },
      
      {
        path: '/mocktails',
        element: <Mocktails />
      },

      {
        path: '/spirits',
        element: <Spirits />
      },
      {
        path: '/beer',
        element: <Beer />
      },
      {
        path: '/profiles/:profileId',
        element: <Profile />
      }, {
        path: '/thoughts/:thoughtId',
        element: <SingleThought />
      },

      {
        path: '/chile-lime-sublime',
        element: <ChileLimeSublime />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
