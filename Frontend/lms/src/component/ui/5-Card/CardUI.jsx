import React from 'react'
import StarRating from './StarRating.jsx'


const CardUI = ({ course }) => {
  return (
    <>

      <div className="bg-white drop-shadow-md overflow-hidden rounded-2xl mr-4 my-4">


        <img src={course.linkImg} alt="" className="h-50 w-full object-cover p-3 rounded-3xl" />
        <div className="p-5  ">

          <h1 className='py-2 truncate'>{course.title}</h1>
          <StarRating rating={course.rating} />

        </div>


        <div className="flex items-center justify-between">
          <h3 className='p-5 text-2xl font-bold text-gray-900 '>{course.price}</h3>
          <a
            href="/"
            className="me-[10px] text-white bg-[#20B486] hover:bg-[#20B486] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Add to cart
          </a>
        </div>


        <div className="absolute top-0 bg-white m-5 px-2 py-[2.5px] rounded font-bold">
          {course.category}
        </div>


      </div>
    </>
  )
}

export default CardUI