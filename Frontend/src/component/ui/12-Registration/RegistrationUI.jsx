import React from 'react'
import { heroImg } from '../../assets'

function RegistrationUI() {
    return (
        <>
            <div className='w-full bg-white py-24'>

                <div className=" md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px] ">
                    <div className="flex flex-col justify-start gap-4   ">

                        <h1 className=' md:leading-[72px] py-4 md:text-6xl text-5xl font-semibold'>Crack your goal with India’s top educators
                        </h1>
                        <p className='py-4 text-lg text-gray-600 font-bold'>Over <span className='text-[#20B486]'>10 crore</span>  learners trust us for their preparation</p>
                        <form action="" className=' max-w-[500px] py-4 input-bx-shadow rounded-md '>
                            <div className="flex flex-col mt-2">
                                <label for="tel" className="hidden">
                                    Number
                                </label>
                                <input
                                    type="tel"
                                    name="tel"
                                    id="tel"
                                    placeholder="Phone Number"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#20B486] focus:outline-none"
                                />
                            </div>
                            <p className='py-4  text-gray-400 '>We’ll send an OTP for verification</p>



                            <button
                                type="submit"
                                className=" w-full max-w-[500px] bg-[#20B486] hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-[#20B486] transition ease-in-out duration-300"
                            >
                                Sign Up For Free
                            </button>
                        </form>
                    </div>

                    <img src={heroImg} className='md:order-last order-first' alt="" />
                </div>
            </div>
        </>
    )
}

export default RegistrationUI