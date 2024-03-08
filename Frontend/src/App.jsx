import './index.css'
import './App.css'
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'


// pages
import LoginPage from './component/page/10-Login/LoginPage.jsx'
import RegistrationPage from './component/page/11-Registration/RegistrationPage.jsx'
import HomePage from './component/page/1-Home/HomePage.jsx'
import AboutPage from './component/page/2-About/AboutPage.jsx'
import SupportPage from './component/page/3-Support/SupportPage.jsx'
import CoursePage from './component/page/6-Course/CoursePage.jsx'
import ContactPage from './component/page/7-Contact/ContactPage.jsx'
import ProfilePage from './component/page/8-Profile/ProfilePage.jsx'
import UserDashboarsPage from './component/page/12-UserDashboardPage/UserDashboarsPage.jsx'
import AdminDashboard from './component/page/13-AdminDashboardPage/AdminDashboardPage.jsx'
import TeacherDashboardPage from './component/page/14-TeacherDashboardPage/TeacherDashboardPage.jsx'
import DashboardPage from './component/page/15-Dashboard/DashboardPage.jsx';


// components
import PageNotFoundUI from './component/ui/17-PageNotFoundUI/PageNotFoundUI.jsx'
import CourseSetupUI from './component/ui/14-CourseSetup/CourseSetupUI.jsx';
import AllStudentUI from './component/ui/21-AllStudentUI/AllStudentUI.jsx';
import AllTeacherUI from './component/ui/22-AllTeacherUI/AllTeacherUI.jsx';
import VideoPlayerUI from './component/ui/23-VideoPlayerUI/VideoPlayerUI.jsx';
import CourseViewUI from './component/ui/4-Courses/Course-View/CourseViewUI.jsx';
import ProfileUpdateUI from './component/ui/26-ProfileUpdateUI/ProfileUpdateUI.jsx';
import AdminAllCourseUI from './component/ui/28-AdminAllCourseUI/AdminAllCourseUI.jsx';
import NavbarUI from './component/ui/1-Navbar/NavbarUI.jsx'
import FooterUI from './component/ui/10-Footer/FooterUI.jsx'
import UpdateVideoDetailsUI from './component/ui/29-UpdateVideoDetailUI/UpdateVideoDetailsUI.jsx'
import LoaderUI from './component/ui/0-LoaderUI/LoaderUI.jsx'
// import axios from 'axios'
// import { useEffect, useState } from 'react'


const App = () => {

    // const [Loader, setLoader] = useState(false)
    // useEffect(() => {
    //     axios.interceptors.request.use((config) => {
    //         setLoader(true)
    //         return config;
    //     }, (error) => {
    //         return Promise.reject(error);
    //     });

    //     axios.interceptors.response.use((config) => {
    //         setLoader(false)
    //         return config;
    //     }, (error) => {
    //         return Promise.reject(error);
    //     });
    // }, [])


    return (
        <>
            <BrowserRouter>
                <NavbarUI />
                {/* <div className="grid justify-items-center">
                    <LoaderUI show={Loader} />
                </div> */}
                <Routes>
                    {/* Unprotected Routes */}
                    <Route path='*' element={<PageNotFoundUI />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/signup' element={<RegistrationPage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/support' element={<SupportPage />} />
                    <Route path='/contact' element={<ContactPage />} />
                    <Route path='/loader' element={<LoaderUI />} />

                    {/* Protected Routes */}
                    <Route path='/' element={
                        <ProtectRoute >
                            <HomePage />
                        </ProtectRoute>
                    } />

                    <Route path='/courses' element={
                        <ProtectRoute >
                            <CoursePage />
                        </ProtectRoute>
                    } />

                    <Route path='/dashbord' element={
                        <ProtectRoute >
                            <DashboardPage />
                        </ProtectRoute>
                    } />

                    <Route path='/videoPlayer' element={
                        <ProtectRoute >
                            <VideoPlayerUI />
                        </ProtectRoute>
                    } />
                    <Route path='/updatedetails' element={
                        <ProtectRoute >
                            <ProfileUpdateUI />
                        </ProtectRoute>
                    } />

                    <Route path='/adminDashboard' element={
                        <ProtectRoute >
                            <AdminDashboard />
                        </ProtectRoute>
                    } >
                        <Route path='profile' element={<ProfilePage />} />
                        <Route path='allcourse' element={<AdminAllCourseUI />} />
                        <Route path='teachers' element={<AllTeacherUI />} />
                        <Route path='students' element={<AllStudentUI />} />
                    </Route>

                    <Route path='/teacherDashboard' element={
                        <ProtectRoute >
                            <TeacherDashboardPage />
                        </ProtectRoute>
                    } >
                        <Route path='profile' element={<ProfilePage />} />
                        <Route path='createcourse' element={<CourseSetupUI />} />
                        <Route path='courseview' element={<CourseViewUI />} />
                        <Route path='updatevideo' element={<UpdateVideoDetailsUI />} />
                    </Route>

                    <Route path='/studentDashboard' element={
                        <ProtectRoute >
                            <UserDashboarsPage />
                        </ProtectRoute>
                    } >
                        <Route path='profile' element={<ProfilePage />} />
                    </Route>
                </Routes>
                <FooterUI />
            </BrowserRouter>
        </>
    )
}

export default App

export const ProtectRoute = ({ children }) => {
    const user = localStorage.getItem('accessToken')

    if (user) {
        return children
    }
    else {
        return <Navigate to={'/login'} />
    }


}
