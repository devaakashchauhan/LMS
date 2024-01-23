import React from 'react'
import { cta } from '../../assets'

const LoginCTA = () => {
  return (
    <>
      <div className='w-full bg-[#E9F8F3] py-24'>

        <div className=" md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8  max-w-[600px] items-center">
          <img src={cta} className='w-[650px] mx-auto' alt="" />

          <div className="">
            <h1 className=' md:leading-[72px] py-4 text-3xl font-semibold'>Join <span className='text-[#20B486]'>World's largest </span> Learning platfrom today</h1>
            <p className='py-4 text-lg text-gray-600'>Start lear by registering for free </p>
            <button className=' max-[780px]:w-full bg-[#20B486] my-4 px-8 py-3 rounded-md text-white font-bold'>Sign Up For Free</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default LoginCTA