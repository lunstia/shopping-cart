import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import Jewelry from './routes/Jewelry.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/jewelry",
    element: <Jewelry />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
