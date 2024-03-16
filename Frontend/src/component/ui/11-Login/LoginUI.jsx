import { useEffect, useState } from 'react'
import { heroImg } from '../../assets'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { toast } from 'react-toastify';


const LoginUI = () => {
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('accessToken')) {
            navigate("/")
        }
    }, [])

    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const userRegistration = () => {
        axios.post('/api/v1/users/login',
            { ...form }
        )
            .then(function ak(response) {
                console.log(response);
                const user = response.data.data.user.username

                if (user) {
                    toast(`Welcome ${user} 😃😃😃`)
                    localStorage.setItem("accessToken", response.data.data.accessToken)
                    localStorage.setItem("avatar", response.data.data.user.avatar)
                    localStorage.setItem("userId", response.data.data.user._id)
                    localStorage.setItem("userName", response.data.data.user.username)
                    navigate("/")
                }
            })
            .catch(function (error) {
                toast(`User does not exist !!!`)
                console.log(error);
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div className='w-full bg-white py-24 '>
                <div className=" md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px] ">
                    <div className="flex flex-col justify-start gap-4   ">
                        <h1 className=' md:leading-[72px] py-4 md:text-6xl text-5xl font-semibold'>Crack your goal with India’s top educators</h1>
                        <p className='py-4 text-lg text-gray-600 font-bold'>Over <span className='text-[#20B486]'>10 crore</span>  learners trust us for their preparation</p>
                        <form action="" onSubmit={(e) => handleSubmit(e)} className=' max-w-[500px] py-4 input-bx-shadow rounded-md '>
                            <div className="flex flex-col mt-2">
                                <label htmlFor="tel" className="hidden">
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
                            <div className="flex flex-col mt-2">
                                <label htmlFor="tel" className="hidden">
                                    Password
                                </label>
                                <input
                                    type="tel"
                                    name="password"
                                    id="tel"
                                    placeholder="Password"
                                    onChange={handleInputChange}
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#20B486] focus:outline-none"
                                />
                            </div>
                            <button
                                type="submit"
                                onClick={userRegistration}
                                className=" w-full max-w-[500px] bg-[#20B486] hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-[#20B486] transition ease-in-out duration-300"
                            >
                                Login
                            </button>
                            <ul className='pt-4' >
                                <li>
                                    I did not have an account
                                    <NavLink
                                        to="/signup"
                                    >
                                        <span className="hover:text-[#20B486] "> Registration</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </form>
                    </div>
                    <img src={heroImg} className='md:order-last order-first' alt="" />
                </div>
            </div>
        </>
    )
}

export default LoginUI