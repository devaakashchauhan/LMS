import React from 'react'
import Slider from 'react-slick';
import Card from '../5-Card/Card.jsx'
import { courses } from './Courses-data/Courses.js'
import '../../..//App.css'


const Courses = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  };
  return (
    <>
      <div className='w-full bg-[#E9F8F3B2] py-32'>

        <div className=" md:max-w-[1480px] m-auto max-w-[600px]">

          <h1 className='text-3xl py-3 font-bold '>Most Popular <span className='text-[#20B486]'>Courses</span></h1>
          <p className='text-[#6D737A]'>Various versions have evolved over the years, sometimes by accident.</p>

          <Slider {...settings} className='px-5'>
            {courses.map((course, i) =>
              <div key={i}>
                <Card course={course} />
              </div>)}


          </Slider>


        </div>

      </div>
    </>
  )
}

export default Courses