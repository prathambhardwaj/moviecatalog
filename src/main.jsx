import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Favorites from './components/Favorites.jsx'
import Home from './components/Home.jsx'
import Search from './components/Search.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/search',
        element: <Search />
      },
      {
        path: '/favorite',
        element: <Favorites />
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
)
