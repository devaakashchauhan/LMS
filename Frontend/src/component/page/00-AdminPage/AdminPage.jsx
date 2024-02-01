import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import LoginUI from '../../ui/11-Login/LoginUI'
import Sidebar from '../../ui/15-Sidebar/Sidebar';
import ProfilePage from '../8-Profile/ProfilePage';
import ProfileUI from '../../ui/16-Profile/ProfileUI';


const AdminPage = () => {
    const [isActive, setIsActive] = useState(false)


    return (
        <>
            <div className="h-full grid grid-cols-6 border border-b">

                <div className="hidden md:flex h-full  flex-col   ">
                    <Sidebar />
                </div>
                <main className=" md:pl-56 col-span-5 py-10"><ProfileUI /></main>
            </div>
        </>
    )
}

export default AdminPage