import React, { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { MdAddBox } from "react-icons/md";


import { heroImg } from '../../assets'

const Chapter = () => {
    const inputRef = useRef(null)
    const [image, setImage] = useState('')

    const handleImgClick = () => {
        inputRef.current.click()
    }
    const handleImgChange = (event) => {

        setImage(event.target.files[0])

    }
    return (
        <>
            <div className='w-full bg-white py-24'>
                <div className="text-center">
                    <h1 className='text-3xl py-3 font-bold '>Chapter <span className='text-[#20B486]'>Setup</span></h1>
                    <p className='text-[#6D737A]'>Complete all fields (1/5)</p>
                </div>
                <div className=" md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px] ">
                    <div className="p-3">
                        <div className=" bg-gray-100 w-full  max-w-[800px] p-4 shadow-lg rounded-md flex  border border-transparent ">
                            <form className="w-full flex flex-col justify-center">
                                <div className="flex flex-col">
                                    <label for="name" className="text-xl py-1 font-bold ">
                                        Chapter Title
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
                                        Chapter Attachments
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
                                        Chapter Description
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
                                            Chapter Video
                                        </label>
                                        <MdAddBox size={40} onClick={handleImgClick} className='ms-auto' />
                                    </div>

                                    <div className="w-full max-w-[300px]">

                                        {image ? <img src={URL.createObjectURL(image)} /> : <img src={heroImg} />}
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
                </div>
                <div className="flex justify-center mt-5">
                    <NavLink to={'/teachermode'}>
                        <button className='w-full max-w-[300px] bg-[#20B486] my-4 px-8 py-3 rounded-md text-white font-bold'>
                            Submit Chapter
                        </button>
                    </NavLink>
                </div>
            </div >
        </>
    )
}

export default Chapter