import HeroUI from '../../ui/2-Hero/HeroUI'
import CompaniesUI from '../../ui/3-Companies/CompaniesUI'
import CoursesSliderUI from '../../ui/4-Courses/Course-Slider/CoursesSliderUI'
import CategoriesUI from '../../ui/7-Categories/CategoriesUI'
import FeedbackUI from '../../ui/8-Feedback/FeedbackUI'
import LoginCTAUI from '../../ui/9-CTA/LoginCTAUI'
import Userchk from '../../ui/19-UserChk/Userchk'


const HomePage = () => {
    return (
        <>
            <Userchk />
            <HeroUI />
            <CompaniesUI />
            <CoursesSliderUI />
            <CategoriesUI />
            <FeedbackUI />
            <LoginCTAUI />
        </>
    )
}

export default HomePage