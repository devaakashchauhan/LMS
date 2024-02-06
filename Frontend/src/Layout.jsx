import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarUI from './component/ui/1-Navbar/NavbarUI.jsx'
import FooterUI from './component/ui/10-Footer/FooterUI.jsx'



const Layout = () => {
    return (
        <>
            {/* <NavbarUI /> */}
            <Outlet />
            <FooterUI />
        </>
    )
}

export default Layout