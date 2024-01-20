import React from 'react'
import { blogImg1 } from '../assets'
import StarRating from './StarRating'


const Card = ({course}) => {
  return (
    <>
    <div className="bg-white drop-shadow-md overflow-hidden rounded-2xl mr-4 my-4">

        <img src={course.linkImg} alt="" className="h-50 w-full object-cover p-3 rounded-3xl"  />
        <div className="p-5  ">

            <h1 className='py-2 truncate'>{course.title}</h1>
            <StarRating rating={course.rating}/>

        </div>
        <h3 className='p-5 text-xl'>{course.price}</h3>
        <div className="absolute top-0 bg-white m-5 px-2 py-[2.5px] rounded font-bold">
            {course.category}
        </div>

    </div>
    </>
  )
}

export default Card