import React from 'react'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

// Import Pages
import HomePage from './pages/HomePage';
import PlanningPage from './pages/PlanningPage';
import ProfilePage from './pages/ProfilePage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import CreatePage from './pages/CreatePage';
import DiscoverPage from './pages/DiscoverPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "plan",
    element: <PlanningPage />,
  },
  {
    path: "profile",
    element: <ProfilePage />,
  },
  {
    path: "create",
    element: <CreatePage />,
  },
  {
    path: "discover",
    element: <DiscoverPage />,
  },
  {
    path: "signup",
    element: <SignUpPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App