import React from 'react';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import { GoogleOAuthProvider } from '@react-oauth/google';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <GoogleOAuthProvider clientId={`${import.meta.env.VITE_APP_GOOGLE_API_TOKEN}`}>
        <div>
          <NavBar />
          <SideBar />
        </div>
      </GoogleOAuthProvider>
    ),
  },
  {
    path: '/Home',
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
