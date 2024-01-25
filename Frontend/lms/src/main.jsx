import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom'

import Layout from './Layout.jsx'
import Home from './component/page/1-Home/Home.jsx'
import About from './component/page/2-About/About.jsx'
import Support from './component/page/3-Support/Support.jsx'
import Platfrom from './component/page/4-PlatFrom/Platfrom.jsx'
import Pricing from './component/page/5-Pricing/Pricing.jsx'
import Login from './component/ui/11-Login/Login.jsx'
import Registration from './component/ui/12-Registration/Registration.jsx'
import Courses from './component/page/6-Courses/Courses.jsx'
import Contact from './component/page/7-Contact/Contact.jsx'



const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/support' element={<Support />} />
      <Route path='/platfrom' element={<Platfrom />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Registration />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/contact' element={<Contact />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
