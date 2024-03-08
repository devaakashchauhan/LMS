import axios from 'axios'
import { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// image,icon,svg
import { MdAddAPhoto } from "react-icons/md";
import LoaderUI from '../0-LoaderUI/LoaderUI';

function ProfileUpdateUI() {

    const navigate = useNavigate()
    const inputRef = useRef(null)

    const [btndisable, setBtndisable] = useState(false)
    const [Loader, setLoader] = useState(false)
    const [image, setImage] = useState('')
    const [userIdForUpdate, setUserIdForUpdate] = useState({})

    const [form, setForm] = useState({
        fullname: "",
        email: "",
        avatar: ""
    });

    useEffect(() => {
        const stringToObject = JSON.parse(localStorage.getItem("userIdForUpdate"));
        if (stringToObject) {
            setUserIdForUpdate(stringToObject);
            setForm({
                fullname: stringToObject.fullname,
                email: stringToObject.email,
                avatar: stringToObject.avatar,
                userid: stringToObject.userid,
            });
        }
    }, []);

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };

    const handleImgClick = () => {
        inputRef.current.click()
    }

    const handleImgChange = (event) => {
        setImage(event.target.files[0])
    }

    const updateDetails = () => {
        setBtndisable(true)
        setLoader(true)

        const formdata = new FormData()
        formdata.append("fullname", form.fullname)
        formdata.append("email", form.email)
        formdata.append("avatar", image)

        axios.post('/api/v1/users/updatedetails',
            formdata
        )
            .then(function (response) {
                console.log(response);
                const role = response.data.data.role

                if (role) {
                    toast("Profile updated 😃")
                    navigate(`/${role}Dashboard/profile`)
                }
            })
            .catch(function (error) {
                console.log(error.response.status);
                const us = error.response.status;
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
            <div className="grid justify-items-center">
                <LoaderUI show={Loader} />
            </div>
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
                            <div className="w-full max-w-[300px] rounded-lg overflow-hidden  object-center  h-[300px] border">
                                {image ? <img src={URL.createObjectURL(image)} /> : <img src={form.avatar} />}
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
                                defaultValue={form.fullname}
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
                                defaultValue={form.email}
                                onChange={handleInputChange}
                                className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#20B486] focus:outline-none"
                            />
                        </div>
                        <div className=" flex gap-3">
                            <button
                                type="submit"
                                onClick={() => updateDetails()}
                                disabled={btndisable}
                                className="md:w-32 bg-[#20B486]  text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-[#20B486]  "
                            >
                                {btndisable ? "Submiting..." : "Submit"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ProfileUpdateUI