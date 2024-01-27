import React, { useState, useRef } from 'react'
import { Link, NavLink } from "react-router-dom";

import { FcAddImage } from "react-icons/fc";
import { MdOutlineVerified } from "react-icons/md";
import { MdVerified } from "react-icons/md";
import { MdAddAPhoto } from "react-icons/md";
import { MdAddBox } from "react-icons/md";
import { TbEdit } from "react-icons/tb";


function Courses() {
    const inputRef = useRef(null)
    const chapRef = useRef(null)
    const [image, setImage] = useState('')

    const [chapertNo, setChapertNo] = useState(1)
    const [chapertTitle, setChapertTitle] = useState("No Title")
    const [chapertPublish, setChapertPublish] = useState(false)

    const handleImgClick = () => {
        inputRef.current.click()
    }
    const handleChapClick = () => {
        chapRef.current.click()
    }
    const handleImgChange = (event) => {
        // const img = event.target.files[0]
        setImage(event.target.files[0])

    }

    return (
        <>
            <div className='w-full bg-white py-24'>
                <div className="text-center">
                    <h1 className='text-3xl py-3 font-bold '>Course <span className='text-[#20B486]'>Setup</span></h1>
                    <p className='text-[#6D737A]'>Complete all fields (1/5)</p>
                </div>
                <div className=" md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px] ">
                    <div className="p-3">
                        <div className=" bg-gray-100 w-full  max-w-[800px] p-4 shadow-lg rounded-md flex  border border-transparent ">
                            <form className="w-full flex flex-col justify-center">
                                <div className="flex flex-col">
                                    <label for="name" className="text-xl py-1 font-bold ">
                                        Course Title
                                    </label>
                                    <input
                                        type="name"
                                        name="name"
                                        id="name"
                                        placeholder="Name"
                                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-200 text-gray-800 font-semibold focus:border-[#20B486] focus:outline-none"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className=" bg-gray-100 w-full  max-w-[800px] p-4 shadow-lg rounded-md flex  border border-transparent ">
                            <form className="w-full flex flex-col justify-center">
                                <div className="flex flex-col">
                                    <label for="name" className="text-xl py-1 font-bold ">
                                        Course Attachments
                                    </label>
                                    <input
                                        type="name"
                                        name="name"
                                        id="name"
                                        placeholder="Name"
                                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-200 text-gray-800 font-semibold focus:border-[#20B486] focus:outline-none"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className=" bg-gray-100 w-full  max-w-[800px] p-4 shadow-lg rounded-md flex  border border-transparent ">
                            <form className="w-full flex flex-col justify-center">
                                <div className="flex flex-col">
                                    <label for="name" className="text-xl py-1 font-bold ">
                                        Course Description
                                    </label>
                                    <input
                                        type="name"
                                        name="name"
                                        id="name"
                                        placeholder="Name"
                                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-200 text-gray-800 font-semibold focus:border-[#20B486] focus:outline-none"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className=" bg-gray-100 w-full  max-w-[800px] p-4 shadow-lg rounded-md flex  border border-transparent ">
                            <form className="w-full flex flex-col justify-center">
                                <div className="flex flex-col">
                                    <label for="name" className="text-xl py-1 font-bold ">
                                        Course category
                                    </label>
                                    <input
                                        type="name"
                                        name="name"
                                        id="name"
                                        placeholder="Name"
                                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-200 text-gray-800 font-semibold focus:border-[#20B486] focus:outline-none"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className=" bg-gray-100 w-full  max-w-[800px] p-4 shadow-lg rounded-md flex  border border-transparent ">
                            <form className="w-full flex flex-col justify-center">
                                <div className="flex flex-col hover:cursor-pointer"  >

                                    <div className="flex ">
                                        <label for="name" className="text-xl py-1 font-bold ">
                                            Course Image
                                        </label>
                                        <MdAddAPhoto size={40} onClick={handleImgClick} className='ms-auto' />
                                    </div>

                                    <div className="w-full max-w-[300px]">

                                        {image ? <img src={URL.createObjectURL(image)} /> : <img src={null} />}
                                    </div>


                                    <input
                                        type="file"
                                        name="name"
                                        id="name"
                                        placeholder="Name"
                                        ref={inputRef}
                                        onChange={handleImgChange}
                                        className="hidden w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-200 text-gray-800 font-semibold focus:border-[#20B486] focus:outline-none"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className=" bg-gray-100 w-full  max-w-[800px] p-4 shadow-lg rounded-md flex  border border-transparent ">
                            <form className="w-full flex flex-col justify-center">
                                <div className="flex flex-col "  >

                                    <div className="flex ">
                                        <label for="name" className="text-xl py-1 font-bold ">
                                            Course Chapters
                                        </label>
                                        <MdAddBox size={30} onClick={handleChapClick} className='ms-auto hover:cursor-pointer' />
                                        <NavLink to="/chapter" className='hidden ' ref={chapRef}  >
                                            Platfrom
                                        </NavLink>
                                    </div>

                                    <div className=" bg-white rounded h-[40px] pt-1 w-full max-w-[600px] flex justify-around text-center">
                                        <div className="text-xl font-bold">{chapertNo}</div>
                                        <div className="text-xl ">{chapertTitle}</div>
                                        <div className="">{chapertPublish ? <MdOutlineVerified size={30} /> : <MdVerified size={30} />}</div>
                                        <div className="hover:cursor-pointer"><TbEdit size={30} onClick={handleChapClick} /></div>
                                    </div>



                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Courses