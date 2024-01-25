import React from 'react'
import { logo, lock, hamburgerMenu, close } from '../../assets'
import { useState } from 'react'
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    const handleClick = () => setToggle(!toggle)

    return (
        <>
            {/* Navbar */}
            <div className='w-full h-[80px] bg-white border-b'>
                <div className="md:max-w-[1480px] max-w-[600px] w-full h-full flex justify-between items-center m-auto">
                    {/* Logo */}
                    <img src={logo} className='h-[25px]' alt="" />

                    {/* menu */}
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
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block ${isActive ? "text-[#20B486]" : "text-gray-500"} py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#20B486] lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/support"
                                    className={({ isActive }) =>
                                        `block ${isActive ? "text-[#20B486]" : "text-gray-500"} py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#20B486] lg:p-0`
                                    }
                                >
                                    Support
                                </NavLink></li>
                            <li>
                                <NavLink
                                    to="/platfrom"
                                    className={({ isActive }) =>
                                        `block ${isActive ? "text-[#20B486]" : "text-gray-500"} py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#20B486] lg:p-0`
                                    }
                                >
                                    Platfrom
                                </NavLink></li>

                            <li>
                                <NavLink
                                    to="/pricing"
                                    className={({ isActive }) =>
                                        `block ${isActive ? "text-[#20B486]" : "text-gray-500"} py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#20B486] lg:p-0`
                                    }
                                >
                                    Pricing
                                </NavLink></li>

                        </ul>
                    </div>

                    <div className="hidden md:flex">
                        <button className='flex justify-between items-center bg-transparent px-6 gap-2'>
                            <img src={lock} alt="" />

                            <ul>
                                <li>
                                    <NavLink
                                        to="/login"
                                        className={({ isActive }) =>
                                            `block ${isActive ? "text-[#20B486]" : "text-gray-500"} py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#20B486] lg:p-0`
                                        }
                                    >
                                        Login
                                    </NavLink>
                                </li>
                            </ul>
                        </button>

                        <button className='bg-[#20B486] px-8 py-3 rounded-md text-white font-bold'>
                            <ul>
                                <li>
                                    <NavLink
                                        to="/signup"
                                        className={({ isActive }) =>
                                            `block ${isActive ? "text-gray-200" : "text-white"} py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0`
                                        }
                                    >
                                        Sign Up For Free
                                    </NavLink>
                                </li>
                            </ul>

                        </button>
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
                                Login
                            </button>

                            <button className='bg-[#20B486] px-8 py-5 rounded-md text-white font-bold'>
                                Sign Up For Free
                            </button>
                        </div>
                    </ul>
                </div>

            </div >
        </>
    )
}

export default Navbar