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
        <NavBar/>
        <div className='flex justify-start'>
        <SideBar/>
        <Home/>
        </div>
        
        
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
