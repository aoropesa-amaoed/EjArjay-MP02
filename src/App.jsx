
import React from 'react'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
      <GoogleOAuthProvider clientId={`${import.meta.env.VITE_APP_GOOGLE_API_TOKEN}`}>
        <NavBar/>
        <div className='flex justify-start'>
        <SideBar/>
        <Home/>
        </div>
        </GoogleOAuthProvider>
        
      </>
    )
  },
]);


function App() {
  
  return (

    <RouterProvider router={router} />

  )
}

export default App