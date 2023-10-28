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
        <SideBar/>
      </>
    )
  },
  {
    path: "/Home",
    element: (
     <Home/>
    )
  },
]);


function App() {
  
  return (

    <RouterProvider router={router} />

  )
}

export default App
