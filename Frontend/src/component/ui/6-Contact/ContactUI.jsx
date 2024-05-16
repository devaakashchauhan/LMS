import axios from "axios";
import { useEffect, useState } from "react";
import LoaderUI from "../0-LoaderUI/LoaderUI";
import { Cookies } from 'react-cookie';
import { toast } from 'react-toastify';


export default function ContactUI() {

    const cookies = new Cookies();

    const [handelUserRegistration, setHandelUserRegistration] = useState(false)
    const [Loader, setLoader] = useState(false)
    const [userId, setuserid] = useState('')
    const [username, setusername1] = useState('')
    const [role, setrole] = useState('')
    const [avatar, setAvatar] = useState('')
    const [fullname, setFullname] = useState('')
    const [email, setemail] = useState('')
    const [feedback, setfeedback] = useState()
    const [rating, setRating] = useState('')


    useEffect(() => {
        setuserid(localStorage.getItem('userId'))
        setusername1(localStorage.getItem('userName'))
        setrole(cookies.get('role'))
        setAvatar(localStorage.getItem('avatar'))
        setFullname(localStorage.getItem('fullname'))
        setemail(localStorage.getItem('email'))

    }, [])

    const handleInputChange = (e) => {
        setfeedback(e.target.value)
    };
    const handleRatingChange = (e) => {
        setRating(e.target.value)
    };

    const userFeedback = () => {


        if (rating <= 5) {
            setHandelUserRegistration(true)
            setLoader(true)
            console.log(fullname, email, feedback, role, userId, username, avatar, rating);

            axios.post('/api/v1/users/setfeedback',
                { fullname, email, feedback, role, userId, username, avatar, rating }
            )
                .then(function (response) {
                    console.log(response);
                    setHandelUserRegistration(false)
                    setLoader(false)
                    toast(`Thank you ${username} for Feedback 😃😃😃`)
                    setfeedback('')
                })
                .catch(function (error) {
                    console.log(error);
                    setHandelUserRegistration(false)
                    setLoader(false)
                });
        }
        else {
            toast(`Give Rating max to max 5 .`)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <>
            <div className="grid justify-items-center">
                <LoaderUI show={Loader} />
            </div>
            <div className="isolate   py-16 lg:px-8 flex justify-center">
                <div className="bg-white shadow-lg rounded-md border-transparent border w-[700px] h-full">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Feedback</h2>
                    </div>
                    <form onSubmit={(e) => handleSubmit(e)} className="mx-auto  max-w-xl mt-20">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                                <div className="mt-2.5">
                                    <textarea name="feedback" id="message" value={feedback} onChange={handleInputChange} rows="4" className="block w-full rounded-md  px-3.5 py-2 sm:text-sm sm:leading-6 border border-gray-200 text-gray-800 font-semibold focus:border-[#20B486] focus:outline-none"></textarea>
                                </div>
                            </div>
                            {/* <div className="">
                                <label className="block text-sm font-semibold leading-6 text-gray-900">rating</label>
                                <div className="mt-2.5">
                                    <input type="text" value={rating} name="rating" onChange={handleRatingChange} />
                                </div>
                            </div> */}

                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Rating</label>
                                <div className="mt-2.5">
                                    <input type="text" value={rating} name="rating" onChange={handleRatingChange} className="block w-full rounded-md  px-3.5 py-2 border border-gray-200 text-gray-800 font-semibold focus:border-[#20B486] focus:outline-none sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                        </div>
                        <div className="my-10">
                            <button
                                type="submit"
                                onClick={() => userFeedback()}
                                disabled={handelUserRegistration}
                                className="block w-full rounded-md bg-green-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"> {handelUserRegistration ? "Submiting..." : "Submit"}</button>
                        </div>
                    </form>
                </div>
            </div>
        </>

    );
}
