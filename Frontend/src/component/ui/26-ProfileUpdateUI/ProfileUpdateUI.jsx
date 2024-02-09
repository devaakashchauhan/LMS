import { MdAddAPhoto } from "react-icons/md";
import { heroImg } from '../../assets'
import axios from 'axios'
import { useState, useRef } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ProfileUpdateUI() {
    const inputRef = useRef(null)
    const [image, setImage] = useState('')
    const [form, setForm] = useState({
        fullname: "",
        username: "",
        email: "",
    });

    const handleImgClick = () => {
        inputRef.current.click()
    }

    const handleImgChange = (event) => {
        setImage(event.target.files[0])

    }

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })

    };

    const updateDetails = () => {
        const formdata = new FormData()
        formdata.append("fullname", form.fullname)
        formdata.append("username", form.username)
        formdata.append("email", form.email)
        formdata.append("avatar", image)
        axios.post('/api/v1/users/updatedetails',
            formdata
        )
            .then(function (response) {
                // console.log(response);
                // console.log(response.data.data._id);
                // const user = response.data.data._id;
            })
            .catch(function (error) {
                console.log(error);
                console.log(error.response.status);
                const us = error.response.status;
                if (us === 401) {
                    toast("Username already exist !!!");
                }
                if (us === 402) {
                    toast("Email already exist !!!");
                }

            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <ToastContainer />
            <div className=" flex justify-center  ">
                <div className=" bg-white w-full  max-w-[800px] p-4 shadow-lg rounded-md flex  border border-transparent ">
                    <form className="p-6  w-full   flex flex-col justify-center" onSubmit={(e) => handleSubmit(e)}>
                        <div className="flex flex-col "  >
                            <div className="flex ">
                                <label className="text-xl py-1 font-bold ">
                                    Profile Image
                                </label>
                                <MdAddAPhoto size={40} onClick={handleImgClick} className=' ms-auto hover:cursor-pointer' />
                            </div>

                            <div className="w-full max-w-[300px]">
                                {image ? <img src={URL.createObjectURL(image)} /> : <img src={heroImg} />}
                            </div>

                            <input
                                type="file"
                                name="image"
                                id="image"
                                ref={inputRef}
                                onChange={handleImgChange}

                                className="hidden w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-200 text-gray-800 font-semibold focus:border-[#20B486] focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col mt-2">
                            <label htmlFor="name" className="text-xl py-1 font-bold ">
                                Full Name
                            </label>
                            <input
                                type="name"
                                name="fullname"
                                id="name"
                                placeholder="Name"
                                onChange={handleInputChange}
                                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#20B486] focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col mt-2">
                            <label htmlFor="email" className="text-xl py-1 font-bold ">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"


                                onChange={handleInputChange}
                                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#20B486] focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col mt-2">
                            <label htmlFor="tel" className="text-xl py-1 font-bold ">
                                User Name
                            </label>
                            <input
                                type="tel"
                                name="username"
                                id="tel"
                                placeholder="User Name"


                                onChange={handleInputChange}
                                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#20B486] focus:outline-none"
                            />
                        </div>
                        <div className=" flex gap-3">
                            <button
                                type="submit"
                                onClick={updateDetails}
                                className="md:w-32 bg-[#20B486] hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-[#20B486] transition ease-in-out duration-300 "
                            >
                                Submit
                            </button>

                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default ProfileUpdateUI