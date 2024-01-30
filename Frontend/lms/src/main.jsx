import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom'

import Layout from './Layout.jsx'
import ChapterUI from './component/ui/13-Chapter/ChapterUI.jsx'
import TeacherPage from './component/page/9-TeacherPage/TeacherPage.jsx'
import LoginPage from './component/page/10-Login/LoginPage.jsx'
import RegistrationPage from './component/page/11-Registration/RegistrationPage.jsx'
import HomePage from './component/page/1-Home/HomePage.jsx'
import AboutPage from './component/page/2-About/AboutPage.jsx'
import SupportPage from './component/page/3-Support/SupportPage.jsx'
import PlatfromPage from './component/page/4-PlatFrom/PlatfromPage.jsx'
import PricingPage from './component/page/5-Pricing/PricingPage.jsx'
import CoursePage from './component/page/6-Course/CoursePage.jsx'
import ContactPage from './component/page/7-Contact/ContactPage.jsx'
import ProfilePage from './component/page/8-Profile/ProfilePage.jsx'
import UserDashboarsPage from './component/page/12-UserDashboardPage/UserDashboarsPage.jsx'
import AdminDashboard from './component/page/13-AdminDashboardPage/AdminDashboardPage.jsx'
import TeacherDashboardPage from './component/page/14-TeacherDashboardPage/TeacherDashboardPage.jsx'





const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/support' element={<SupportPage />} />
      <Route path='/platfrom' element={<PlatfromPage />} />
      <Route path='/pricing' element={<PricingPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<RegistrationPage />} />
      <Route path='/courses' element={<CoursePage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='/chapter' element={<ChapterUI />} />
      <Route path='/teachermode' element={<TeacherPage />} />
      <Route path='/adminDashboard' element={<AdminDashboard />} />
      <Route path='/userDashboard' element={<UserDashboarsPage />} />
      <Route path='/teacherDashboard' element={<TeacherDashboardPage />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
