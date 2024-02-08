import { NavLink } from "react-router-dom";
import { logo } from '../../assets'
import { FaBehance, FaDribbble, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

function FooterUI() {
    return (
        <>
            <div className='w-full bg-white py-24'>

                <div className=" md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2  gap-8  max-w-[600px] ">
                    <div className="col-span-2">
                        <img src={logo} className='h-[25px]' alt="" />
                        <h3 className='text-2xl font-bold mt-10'>
                            <NavLink to={'/contact'} className={'text-2xl font-bold'}>
                                Contact Us
                            </NavLink>
                        </h3>
                        <h1 className='py-2 text-[#6D737A]'>Call : +123 400 123</h1>
                        <h1 className='py-2 text-[#6D737A]'>Praesent nulla massa, hendrerit <br /> vestibulum gravida in, feugiat auctor felis.</h1>
                        <h1 className='py-2 text-[#6D737A]'>Email: example@mail.com</h1>
                        <div className="flex gap-4 py-4">
                            <div className="p-4 bg-[#E9F8F3] rounded-xl"><FaFacebookF size={25} style={{ color: '#4DC39E' }} /></div>
                            <div className="p-4 bg-[#E9F8F3] rounded-xl"><FaDribbble size={25} style={{ color: '#4DC39E' }} /></div>
                            <div className="p-4 bg-[#E9F8F3] rounded-xl"><FaLinkedinIn size={25} style={{ color: '#4DC39E' }} /></div>
                            <div className="p-4 bg-[#E9F8F3] rounded-xl"><FaInstagram size={25} style={{ color: '#4DC39E' }} /></div>
                            <div className="p-4 bg-[#E9F8F3] rounded-xl"><FaBehance size={25} style={{ color: '#4DC39E' }} /></div>
                        </div>
                    </div>


                    <div className="">
                        <h3 className='text-2xl font-bold'>Explore</h3>
                        <ul className='py-6  text-[#6D737A]'>
                            <li className='py-2 hover:cursor-pointer hover:text-[#20B486]'>
                                <NavLink

                                    to={'/'}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className='py-2 hover:cursor-pointer hover:text-[#20B486]'>
                                <NavLink to={'/about'}>

                                    About
                                </NavLink>
                            </li>
                            <li className='py-2 hover:cursor-pointer hover:text-[#20B486]'>
                                <NavLink to={'/courses'}>

                                    Courses
                                </NavLink>
                            </li>
                            <li className='py-2 hover:cursor-pointer hover:text-[#20B486]'>
                                <NavLink to={'/contact'}>

                                    Contact
                                </NavLink>
                            </li>
                            {/* <li className='py-2 hover:cursor-pointer hover:text-[#20B486]'>
                                <NavLink to={'/teacherDashboard'}>

                                    Teacher Mode
                                </NavLink>
                            </li>
                            <li className='py-2 hover:cursor-pointer hover:text-[#20B486]'>
                                <NavLink to={'/adminDashboard'}>

                                    Admin Mode
                                </NavLink>
                            </li>
                            <li className='py-2 hover:cursor-pointer hover:text-[#20B486]'>
                                <NavLink to={'/userDashboard'}>

                                    User Mode
                                </NavLink>
                            </li> */}


                        </ul>
                    </div>
                    <div className="">
                        <h3 className='text-2xl font-bold'>Category</h3>
                        <ul className='py-6  text-[#6D737A]'>
                            <li className='py-2'>Design</li>
                            <li className='py-2'>Development</li>
                            <li className='py-2'>Marketing</li>
                            <li className='py-2'>Business</li>
                            <li className='py-2'>Lifestyle</li>
                            <li className='py-2'>Photography</li>
                            <li className='py-2'>Music</li>

                        </ul>
                    </div>
                    <div className="max-[780px]:col-span-2">
                        <h3 className='text-2xl font-bold'>Subscribe</h3>
                        <h3 className='py-2 text-[#6D737A]'>Lorem Ipsum has been them an industry <br /> printer took a galley make book.</h3>
                        <form action="" className='py-4'>
                            <input type="text" className='bg-[#F2F3F4] p-4 w-full rounded' placeholder='Email Here' />
                            <button className=' max-[780px]:w-full bg-[#20B486] my-4 px-5   py-3 rounded-md text-white font-medium'>Subscribe Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FooterUI