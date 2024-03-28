import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import '../../..//App.css'
import FeedbackCardUI from './FeedbackCard/FeedbackCardUI.jsx'
import axios from 'axios';



const FeedbackUI = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
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

    const [allfeedbacks, setAllfeedbacks] = useState([])

    useEffect(() => {
        getallfeedback()
    }, [])




    const getallfeedback = () => {
        axios.post('/api/v1/users/getallfeedback',
            {}
        )
            .then(function ak(response) {
                console.log(response);
                setAllfeedbacks(response.data.data)
                console.table(allfeedbacks);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <>
            <div className='w-full bg-white py-32'>

                <div className=" md:max-w-[1480px] m-auto max-w-[600px]">

                    <h1 className='text-3xl py-3 font-bold '>Student <span className='text-[#20B486]'>Feedback</span></h1>
                    <p className='text-[#6D737A]'>Various versions have evolved over the years, sometimes by accident.</p>

                    <Slider {...settings} className='px-5'>
                        {/* {courses.map((course, i) =>
                            <div key={i}>
                                <Card course={course} />
                            </div>)} */}



                        {allfeedbacks.map((feedback, index) => (
                            <div key={index}>
                                <FeedbackCardUI
                                    username={feedback.username}
                                    feedback={feedback.feedback}
                                    _id={feedback._id}
                                    fullname={feedback.fullname}
                                    email={feedback.email}
                                    role={feedback.role}
                                    createdAt={feedback.createdAt}
                                    userId={feedback.userId}
                                    avatar={feedback.avatar}
                                />
                            </div>
                        ))}


                    </Slider>


                </div>

            </div>
        </>
    )
}

export default FeedbackUI