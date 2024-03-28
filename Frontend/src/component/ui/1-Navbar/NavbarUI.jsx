import { logo, lock, hamburgerMenu, close } from '../../assets'
import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';

const NavbarUI = () => {
    const navigate = useNavigate()
    const [image, setImage] = useState('')
    const [toggle, setToggle] = useState(false)
    const [logout, setLogout] = useState(false)

    const handleClick = () => setToggle(!toggle)

    useEffect(() => {
        if (localStorage.getItem('accessToken')) {
            setLogout(true)
            setImage(localStorage.getItem('avatar'))
        }
    }, [localStorage.getItem('accessToken'), localStorage.getItem('avatar')])

    const userLogout = () => {
        axios.post('/api/v1/users/logout',
            null
        )
            .then(function (response) {
                console.log(response);
                localStorage.clear();
                setLogout(false)
                setImage('')
                navigate("/login")
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <div className='w-full h-[80px] bg-white border-b'>
                <div className="md:max-w-[1480px] max-w-[600px] w-full h-full flex justify-between items-center m-auto">
                    <img src={logo} className='h-[25px]' alt="" />
                    <div className="hidden md:flex items-center ">
                        <ul className='flex gap-4'>
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block ${isActive ? "text-[#20B486]" : "text-gray-500"} py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#20B486] lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/feedback"
                                    className={({ isActive }) =>
                                        `block ${isActive ? "text-[#20B486]" : "text-gray-500"} py-2 pr-4 pl-3 duration-200  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#20B486] lg:p-0`
                                    }
                                >
                                    Feedback
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/courses"
                                    className={({ isActive }) =>
                                        `block ${isActive ? "text-[#20B486]" : "text-gray-500"} py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#20B486] lg:p-0`
                                    }
                                >
                                    Courses
                                </NavLink></li>
                            {logout ?
                                <li>
                                    <NavLink
                                        onClick={() => userLogout()}
                                        className={
                                            `block text-gray-500 py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#20B486] lg:p-0`
                                        }
                                    >
                                        Logout
                                    </NavLink>
                                </li> : null}
                            <li>
                                <NavLink
                                    to="/dashbord"
                                    className={({ isActive }) =>
                                        `block ${isActive ? "text-[#20B486]" : "text-gray-500"} py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#20B486] lg:p-0`
                                    }
                                >
                                    DashBord
                                </NavLink>
                            </li>

                        </ul>
                    </div>

                    <div className="hidden md:flex">
                        <div className="max-w-[50px] max-h-[50px] border border-green-500 rounded-full overflow-hidden "><img src={image} /></div>
                    </div>

                    {/* toggle button  */}
                    <div className="md:hidden" onClick={handleClick}>
                        <img src={toggle ? close : hamburgerMenu} alt="" />
                    </div>
                </div>

                {/* sidebar for mobile */}
                <div className={toggle ? 'absolute z-10 p-4 bg-white w-full px-8 md:hidden' : 'hidden'}>
                    <ul>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `block ${isActive ? "text-[#20B486]" : "text-gray-500"} py-2 pr-4 pl-3 duration-200  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#20B486] lg:p-0`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `block ${isActive ? "text-[#20B486]" : "text-gray-500"} py-2 pr-4 pl-3 duration-200  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#20B486] lg:p-0`
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `block ${isActive ? "text-[#20B486]" : "text-gray-500"} py-2 pr-4 pl-3 duration-200  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#20B486] lg:p-0`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/support"
                                className={({ isActive }) =>
                                    `block ${isActive ? "text-[#20B486]" : "text-gray-500"} py-2 pr-4 pl-3 duration-200  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#20B486] lg:p-0`
                                }
                            >
                                Support
                            </NavLink></li>
                        <li>
                            <NavLink
                                to="/platfrom"
                                className={({ isActive }) =>
                                    `block ${isActive ? "text-[#20B486]" : "text-gray-500"} py-2 pr-4 pl-3 duration-200  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#20B486] lg:p-0`
                                }
                            >
                                Platfrom
                            </NavLink></li>

                        <li>
                            <NavLink
                                to="/pricing"
                                className={({ isActive }) =>
                                    `block ${isActive ? "text-[#20B486]" : "text-gray-500"} py-2 pr-4 pl-3 duration-200  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#20B486] lg:p-0`
                                }
                            >
                                Pricing
                            </NavLink>
                        </li>

                        <div className="flex flex-col my-4 gap-4 ">
                            <button className='border border-[#20B486]  flex justify-center items-center bg-transparent px-6 gap-4 py-4 '>
                                <img src={lock} alt="" />
                                <NavLink
                                    to=""

                                >
                                    Login
                                </NavLink>
                            </button>

                            <button className='bg-[#20B486] px-8 py-5 rounded-md text-white font-bold'>
                                <NavLink
                                    to="/signup"

                                >
                                    Sign Up For Free
                                </NavLink>
                            </button>
                        </div>
                    </ul>
                </div>

            </div >
        </>
    )
}

export default NavbarUI