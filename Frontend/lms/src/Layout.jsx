import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './component/ui/1-Navbar/Navbar.jsx'
import Footer from './component/ui/10-Footer/Footer.jsx'



const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout