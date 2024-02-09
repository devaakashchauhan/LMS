import './index.css'
import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Cookies } from 'react-cookie';


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
import PageNotFoundUI from './component/ui/17-PageNotFoundUI/PageNotFoundUI.jsx'
import { useEffect, useState } from 'react';
import DashboardPage from './component/page/15-Dashboard/DashboardPage.jsx';
import CourseSetupUI from './component/ui/14-CourseSetup/CourseSetupUI.jsx';
import CourseVieew from './component/ui/20-CourseView/CourseVieew.jsx';
import AllStudentUI from './component/ui/21-AllStudentUI/AllStudentUI.jsx';
import AllTeacherUI from './component/ui/22-AllTeacherUI/AllTeacherUI.jsx';
import VideoPlayerUI from './component/ui/23-VideoPlayerUI/VideoPlayerUI.jsx';
import CourseViewUI from './component/ui/4-Courses/Course-View/CourseViewUI.jsx';




const App = () => {

    const cookies = new Cookies();
    const [role, setRole] = useState('');
    useEffect(() => {
        setRole(cookies.get('role'))
    }, [])




    // axios.interceptors.request.use(function (config) {
    //     console.log("inter req = ", config);
    //     return config;
    // }, function (error) {

    //     return Promise.reject(error);
    // });


    // axios.interceptors.response.use(function (response) {
    //     console.log("inter res = ", response);
    //     return response;
    // }, function (error) {

    //     return Promise.reject(error);
    // });
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route path='*' element={<PageNotFoundUI />} />
                        <Route path='/login' element={<LoginPage />} />
                        <Route path='/' element={<HomePage />} />
                        <Route path='/about' element={<AboutPage />} />
                        <Route path='/support' element={<SupportPage />} />
                        <Route path='/platfrom' element={<PlatfromPage />} />
                        <Route path='/pricing' element={<PricingPage />} />
                        <Route path='/signup' element={<RegistrationPage />} />
                        <Route path='/courses' element={<CoursePage />} />
                        <Route path='/contact' element={<ContactPage />} />
                        <Route path='/profile' element={<ProfilePage />} />
                        <Route path='/chapter' element={<ChapterUI />} />
                        <Route path='/dashbord' element={<DashboardPage />} />
                        <Route path='/teachermode' element={<TeacherPage />} />
                        <Route path='/videoPlayer' element={<VideoPlayerUI />} />
                        <Route path='/adminDashboard' element={<AdminDashboard />} >
                            <Route path='profile' element={<ProfilePage />} />
                            <Route path='students' element={<AllStudentUI />} />
                            <Route path='teachers' element={<AllTeacherUI />} />
                            <Route path='courseview' element={<CourseViewUI />} />
                        </Route>
                        <Route path='/studentDashboard' element={<UserDashboarsPage />} >
                            <Route path='profile' element={<ProfilePage />} />
                            <Route path='createcourse' element={<CourseSetupUI />} />
                            <Route path='courseview' element={<CourseVieew />} />
                        </Route>
                        <Route path='/teacherDashboard' element={<TeacherDashboardPage />} >
                            <Route path='profile' element={<ProfilePage />} />
                            <Route path='createcourse' element={<CourseSetupUI />} />
                            <Route path='courseview' element={<CourseVieew />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App