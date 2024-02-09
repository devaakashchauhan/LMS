import { useEffect, useRef, useState } from 'react'
import { MdAddAPhoto } from "react-icons/md";
import { RiFileEditLine } from "react-icons/ri";
import { heroImg } from '../../assets'
import axios from 'axios'


function ProfileUI() {
    const inputRef = useRef(null)
    const [image, setImage] = useState('')
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [edit, setEdit] = useState(true)
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

    const editHandel = () => {
        setEdit(!edit)
    }

    const updateDetails = () => {
        const formdata = new FormData()
        formdata.append("fullname", fullname)
        formdata.append("username", userName)
        formdata.append("email", email)
        formdata.append("avatar", image)
        axios.post('/api/v1/users/updatedetails',
            formdata
        )
            .then(function (response) {
                // console.log(response);
                // console.log(response.data.data._id);
                const user = response.data.data._id;
            })
            .catch(function (error) {
                console.log(error);
                console.log(error.response.status);
                const us = error.response.status;
                if (us === 401) {
                    console.log("username is already existe !!!")
                }
                if (us === 402) {
                    console.log("email is already existe !!!")
                }

            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }




    useEffect(() => {
        axios.post('/api/v1/users/userDetails',
            {}
        )
            .then(function (response) {
                // console.log(response);                
                setImage(response.data.data.avatar)
                setFullname(response.data.data.fullname)
                setEmail(response.data.data.email)
                setUserName(response.data.data.username)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])


    return (
        <>

            <div className=" flex justify-center  ">
                <div className=" bg-white w-full  max-w-[800px] p-4 shadow-lg rounded-md flex  border border-transparent ">
                    <form className="p-6  w-full   flex flex-col justify-center" onSubmit={(e) => handleSubmit(e)}>
                        <div className="flex flex-col "  >
                            <div className="flex ">
                                <label className="text-xl py-1 font-bold ">
                                    Profile Image
                                </label>
                                {edit ? <RiFileEditLine size={40} onClick={() => editHandel()} className=' ms-auto hover:cursor-pointer' /> : <MdAddAPhoto size={40} onClick={handleImgClick} className=' ms-auto hover:cursor-pointer' />}

                            </div>

                            <div className="w-full max-w-[300px]">
                                {image ? <img src={image} /> : <img src={heroImg} />}
                            </div>


                            <input
                                type="file"
                                name="image"
                                id="image"
                                ref={inputRef}
                                onChange={handleImgChange}
                                readOnly={edit}
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
                                defaultValue={fullname}
                                readOnly={edit}
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
                                defaultValue={email}
                                readOnly={edit}
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
                                defaultValue={userName}
                                readOnly={edit}
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
                            {edit ? null : <button

                                onClick={() => editHandel()}
                                className="md:w-32 bg-[#20B486] hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-[#20B486] transition ease-in-out duration-300"
                            >
                                Cancel
                            </button>}
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default ProfileUI