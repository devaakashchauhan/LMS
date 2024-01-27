import React from 'react'
import { courses } from '../Courses-data/Courses.js'
import Card from '../../5-Card/Card.jsx'

function CourseView() {
    return (
        <>
            <div className='w-full bg-[#E9F8F3B2] py-32'>
                <div className="text-center">
                    <h1 className='text-3xl py-3 font-bold '>Most Popular <span className='text-[#20B486]'>Courses</span></h1>
                    <p className='text-[#6D737A]'>Various versions have evolved over the years, sometimes by accident.</p>
                </div>

                <div className=" md:max-w-[1480px] m-auto grid md:grid-cols-4 max-w-[600px]">
                    {courses.map((course, i) =>
                        <div key={i}>
                            <Card course={course} />
                        </div>)}
                </div>

            </div>
        </>
    )
}

export default CourseView