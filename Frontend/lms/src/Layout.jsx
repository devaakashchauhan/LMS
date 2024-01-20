import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './component/ui/1-Navbar/Navbar.jsx'


const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Layout