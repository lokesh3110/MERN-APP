import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Create from './components/Create.jsx';
import Read from './components/Read.jsx';
import Update from './components/Update.jsx';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element:  <App />,
    children: [
      {
        path: '/create',
        element:  <Create />
      },
      {
        path: '/all',
        element:  <Read />
      },
      {
        path: '/:id',
        element:  <Update />
      }
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router={router} />
  // {/* </StrictMode>, */}
)
