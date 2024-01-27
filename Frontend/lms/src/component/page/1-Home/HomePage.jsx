import React from 'react'
import Hero from '../../ui/2-Hero/Hero'
import Companies from '../../ui/3-Companies/Companies'
import CoursesSlider from '../../ui/4-Courses/Course-Slider/CoursesSlider'
import Categories from '../../ui/7-Categories/Categories'
import Feedback from '../../ui/8-Feedback/Feedback'
import LoginCTA from '../../ui/9-CTA/LoginCTA'



const HomePage = () => {
    return (
        <>
            <Hero />
            <Companies />
            <CoursesSlider />
            <Categories />
            <Feedback />
            <LoginCTA />
        </>
    )
}

export default HomePage