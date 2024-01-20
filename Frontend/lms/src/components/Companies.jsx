import React from 'react'
import { companyLogo1, companyLogo2,companyLogo3,companyLogo4} from '../assets'

const Companies = () => {
  return (
    <>
        <div className='w-full bg-white py-[50px]'>

            <div className=" md:max-w-[1480px] m-auto max-w-[600px]">

                <h1 className='text-center text-2xl font-bold text-[#536E96]'>Trusted by over 25,000 teams around the world.</h1>
                <p className='text-center text-[#536E96]'>Leading companies use the same courses to help employees keep their skills fresh.</p>
                <div className="flex justify-center py-8 md:gap-8 ">
                    <img src={companyLogo1} alt="" />
                    <img src={companyLogo2} alt="" />
                    <img src={companyLogo3} alt="" />
                    <img src={companyLogo4} alt="" />
                </div>
            </div>

        </div>
    </>
  )
}

export default Companies