import React from 'react'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


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
  
]);

function App() {
  
  return (
    <RouterProvider router={router} />
  )
}

export default App
