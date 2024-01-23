import React from 'react'
import Hero from '../../ui/2-Hero/Hero'
import Companies from '../../ui/3-Companies/Companies'
import Courses from '../../ui/4-Courses/Courses'
import Categories from '../../ui/7-Categories/Categories'
import Feedback from '../../ui/8-Feedback/Feedback'
import LoginCTA from '../../ui/9-CTA/LoginCTA'
import Footer from '../../ui/10-Footer/Footer'



const Home = () => {
    return (
        <>
            <Hero />
            <Companies />
            <Courses />
            <Categories />
            <Feedback />
            <LoginCTA />
            <Footer />
        </>
    )
}

export default Home