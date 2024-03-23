import { useEffect, useState } from 'react'
import { heroImg } from '../../assets'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ProfileUI() {

    const [image, setImage] = useState('')
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [userid, setUserid] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        axios.post('/api/v1/users/userDetails',
            {}
        )
            .then(function (response) {
                console.log(response);
                setImage(response.data.data.avatar)
                setFullname(response.data.data.fullname)
                setEmail(response.data.data.email)
                setUserName(response.data.data.username)
                setUserid(response.data.data._id)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    const handelUpdateUser = () => {
        const userIdForUpdate = {
            "fullname": fullname,
            "email": email,
            "avatar": image,
            "userName": userName,
            "userid": userid,

        }
        const stringifiedObject = JSON.stringify(userIdForUpdate)
        localStorage.setItem("userIdForUpdate", stringifiedObject)
    }

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
                            </div>
                            <div className="w-full max-w-[300px] rounded-lg overflow-hidden  object-center  h-[300px]">
                                {image ? <img src={image} /> : <img src={heroImg} />}
                            </div>
                            <input
                                type="file"
                                name="image"
                                id="image"
                                className="hidden w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-200 text-gray-800 font-semibold focus:border-[#20B486] focus:outline-none"
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
                                readOnly
                                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#20B486] focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col mt-2">
                            <label htmlFor="name" className="text-xl py-1 font-bold ">Full Name</label>
                            <input
                                type="name"
                                name="fullname"
                                id="name"
                                placeholder="Name"
                                defaultValue={fullname}
                                readOnly
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
                                readOnly
                                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#20B486] focus:outline-none"
                            />
                        </div>
                        <div className="mt-5">
                            <Link
                                onClick={handelUpdateUser}
                                to="/updatedetails"
                                className="md:w-35 bg-[#20B486] hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-[#20B486] transition ease-in-out duration-300"
                            >
                                Edit
                            </Link>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default ProfileUI