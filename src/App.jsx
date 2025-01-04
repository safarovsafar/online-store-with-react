import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/layout'
import Home from './pages/home'
import About from './pages/about'
import Contacts from './pages/contacts'
import Sign from './pages/sign'
import Log from './pages/log'
import Category from './pages/category'
import Info from './pages/info'
import Cart from './pages/cart'
import Pay from './pages/pay'

function App() {

  const router = createBrowserRouter([
   {
    path:"/",
    element:<Layout/>,
    children:[
      {path:"/", element:<Home/>},
      {path:"/about", element:<About/>},
      {path:"/contacts", element:<Contacts/>},
      {path:"/sign", element:<Sign/>},
      {path:"/log", element:<Log/>},
      {path:"/category", element:<Category/>},
      {path:"/info", element:<Info/>},
      {path:"/cart", element:<Cart/>},
      {path:"/pay", element:<Pay/>}
    ] 
  },

  ])

  return <RouterProvider router={router}/>
}

export default App
