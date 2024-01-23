import React from 'react'
import Slider from 'react-slick'
import Hero from '../../ui/2-Hero/Hero'
import Companies from '../../ui/3-Companies/Companies'
import Courses from '../../ui/4-Courses/Courses'
import Categories from '../../ui/7-Categories/Categories'
import Feedback from '../../ui/8-Feedback/Feedback'



const Home = () => {
    return (
        <>
            <Hero />
            <Companies />
            <Courses />
            <Categories />
            <Feedback />
        </>
    )
}

export default Home