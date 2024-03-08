import { useRef, useState } from 'react'
import { heroImg } from '../../assets'
import { MdAddAPhoto } from "react-icons/md";
import axios from 'axios'
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import LoaderUI from '../0-LoaderUI/LoaderUI';


function RegistrationUI() {

    const navigate = useNavigate()
    const inputRef = useRef(null)

    const [image, setImage] = useState('')
    const [handelUserRegistration, setHandelUserRegistration] = useState(false)
    const [Loader, setLoader] = useState(false)

    const [form, setForm] = useState({
        fullname: "",
        username: "",
        email: "",
        password: "",
        role: "",
    });

    const handleImgClick = () => {
        inputRef.current.click()
    }

    const handleImgChange = (e) => {
        setImage(e.target.files[0])
    }

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };

    const userRegistration = () => {
        setHandelUserRegistration(true)
        setLoader(true)

        const formdata = new FormData()
        formdata.append("fullname", form.fullname)
        formdata.append("username", form.username)
        formdata.append("email", form.email)
        formdata.append("password", form.password)
        formdata.append("role", form.role)
        formdata.append("avatar", image)

        axios.post('/api/v1/users/register',
            formdata
        )
            .then(function (response) {
                console.log(response);
                // console.log(response.data.data._id);
                setHandelUserRegistration(false)
                setLoader(false)
                const user = response.data.data._id;
                if (user) {
                    toast(`Registration done successfully 😃`)
                    navigate("/login")
                }
            })
            .catch(function (error) {
                console.log(error);
                setHandelUserRegistration(false)
                setLoader(false)
            });

    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className="grid justify-items-center">
                <LoaderUI show={Loader} />
            </div>
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
                                Password
                            </label>
                            <input
                                type="tel"
                                name="password"
                                id="number"
                                placeholder="Password"
                                onChange={handleInputChange}
                                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#20B486] focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col mt-2">
                            <label htmlFor="tel" className="text-xl py-1 font-bold ">
                                Role
                            </label>
                            <select name="role" onChange={handleInputChange} value={form.role ? form.role : "Role"} className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#20B486] focus:outline-none">
                                <option >Role</option>
                                <option name="student" value="student">Student</option>
                                <option name="teacher" value="teacher">Teacher</option>
                                {/* <option value="admin">Admin</option> */}
                            </select>
                        </div>
                        <button
                            type="submit"
                            onClick={() => userRegistration()}
                            disabled={handelUserRegistration}
                            className="md:w-35 bg-[#20B486] hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-[#20B486] transition ease-in-out duration-300"
                        >
                            {handelUserRegistration ? "Resgistrating..." : "Resgistration"}
                        </button>
                        <ul className='pt-4'>
                            <li>
                                I  have an account
                                <NavLink to="/login"                                >
                                    <span className="hover:text-[#20B486] "> Login</span>
                                </NavLink>
                            </li>
                        </ul>
                    </form>
                </div >
            </div >
        </>
    )
}

export default RegistrationUI