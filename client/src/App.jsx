import React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

// Import Pages
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App