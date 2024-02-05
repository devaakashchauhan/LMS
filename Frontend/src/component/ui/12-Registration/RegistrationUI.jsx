import React, { useRef, useState } from 'react'
import { heroImg } from '../../assets'
import { MdAddAPhoto } from "react-icons/md";
import axios from 'axios'


function RegistrationUI() {
    const inputRef = useRef(null)
    const [image, setImage] = useState('')
    const [form, setForm] = useState({
        fullname: "",
        username: "",
        email: "",
        password: "",
        number: "",

    });

    const handleImgClick = () => {
        inputRef.current.click()
    }

    const handleImgChange = (e) => {
        setImage(e.target.files[0])


    }

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const userRegistration = () => {

        const formdata = new FormData()
        formdata.append("fullname", form.fullname)
        formdata.append("username", form.username)
        formdata.append("email", form.email)
        formdata.append("password", form.password)
        formdata.append("number", form.number)
        formdata.append("avatar", image)
        axios.post('/api/v1/users/register',
            formdata
        )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>





            <div className=" flex justify-center  ">
                <div className=" bg-white w-full  max-w-[800px] p-4 shadow-lg rounded-md flex  border border-transparent ">
                    <form className="p-6  w-full   flex flex-col justify-center" onSubmit={(e) => handleSubmit(e)}>
                        <div className="flex flex-col "  >

                            <div className="flex ">
                                <label htmlFor="name" className="text-xl py-1 font-bold ">
                                    Profile Image
                                </label>
                                <MdAddAPhoto size={40} onClick={() => handleImgClick()} className='ms-auto hover:cursor-pointer' />
                            </div>

                            <div className="w-full max-w-[300px]">
                                {image ? <img src={URL.createObjectURL(image)} /> : <img src={heroImg} />}
                            </div>


                            <input
                                type="file"

                                name="avatar"
                                placeholder="Name"
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
                                type="text"
                                name="fullname"
                                id="fullname"
                                placeholder="Full Name"
                                onChange={handleInputChange}
                                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#20B486] focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col mt-2">
                            <label htmlFor="name" className="text-xl py-1 font-bold ">
                                User Name
                            </label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="User Name"
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
                                Number
                            </label>
                            <input
                                type="tel"
                                name="number"
                                id="number"
                                placeholder="Phone Number"
                                onChange={handleInputChange}
                                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#20B486] focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col mt-2">
                            <label htmlFor="tel" className="text-xl py-1 font-bold ">
                                Password
                            </label>
                            <input
                                type="text"
                                name="password"
                                id="password"
                                placeholder="Password"
                                onChange={handleInputChange}
                                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#20B486] focus:outline-none"
                            />
                        </div>
                        <button
                            type="submit"
                            onClick={() => userRegistration()}
                            className="md:w-35 bg-[#20B486] hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-[#20B486] transition ease-in-out duration-300"
                        >
                            Resgistration
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default RegistrationUI