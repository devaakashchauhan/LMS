import React, { useRef, useState } from 'react'
import { MdAddAPhoto } from "react-icons/md";
import { heroImg } from '../../assets'
// todo con not import image 
// import { profile } from '../../assets'

function Profile() {
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

            <div className=" flex justify-center py-3 ">
                <div className=" bg-white w-full  max-w-[800px] p-4 shadow-lg rounded-md flex  border border-transparent ">
                    <form className="p-6  w-full   flex flex-col justify-center">
                        <div className="flex flex-col "  >

                            <div className="flex ">
                                <label for="name" className="text-xl py-1 font-bold ">
                                    Profile Image
                                </label>
                                <MdAddAPhoto size={40} onClick={handleImgClick} className='ms-auto hover:cursor-pointer' />
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
                        <div className="flex flex-col mt-2">
                            <label for="name" className="text-xl py-1 font-bold ">
                                Name
                            </label>
                            <input
                                type="name"
                                name="name"
                                id="name"
                                placeholder="Name"
                                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#20B486] focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col mt-2">
                            <label for="email" className="text-xl py-1 font-bold ">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#20B486] focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col mt-2">
                            <label for="tel" className="text-xl py-1 font-bold ">
                                Number
                            </label>
                            <input
                                type="tel"
                                name="tel"
                                id="tel"
                                placeholder="Telephone Number"
                                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#20B486] focus:outline-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="md:w-32 bg-[#20B486] hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-[#20B486] transition ease-in-out duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Profile