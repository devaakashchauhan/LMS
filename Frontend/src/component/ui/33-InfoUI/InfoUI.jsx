import axios from 'axios';
import { useEffect, useState } from 'react';
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { PiStudent, PiVideoLight } from "react-icons/pi";

function InfoUI() {
    const [totalTeacher, setTotalTeacher] = useState(0)
    const [totalStudent, setTotalStudent] = useState(0)
    const [totalVideo, setTotalVideo] = useState(0)

    useEffect(() => {
        getteachercount()
        getstudentcount()
        getvideocount()
    }, [])

    const getteachercount = () => {
        axios.post('/api/v1/users/getteachercount',
            {}
        )
            .then(function ak(response) {
                console.log(response);
                setTotalTeacher(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const getstudentcount = () => {
        axios.post('/api/v1/users/getstudentcount',
            {}
        )
            .then(function ak(response) {
                console.log(response);
                setTotalStudent(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const getvideocount = () => {
        axios.post('/api/v1/users/getvideocount',
            {}
        )
            .then(function ak(response) {
                console.log(response);
                setTotalVideo(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (
        <>

            <main className='main-container'>
                <div className='main-title'>
                    <h3>DASHBOARD</h3>
                </div>

                <div className='main-cards  '>
                    <div className='card'>
                        <div className='card-inner'>
                            <h3>Teacher</h3>
                            {/* <BsPeopleFill className='card_icon' /> */}
                            <LiaChalkboardTeacherSolid className=' w-[40px] h-[40px]' />
                        </div>
                        <h1>{totalTeacher}</h1>
                    </div>

                    <div className='card'>
                        <div className='card-inner'>
                            <h3>Student</h3>
                            {/* <BsPeopleFill className='card_icon' /> */}
                            <PiStudent className='className= w-[40px] h-[40px]' />
                        </div>
                        <h1>{totalStudent}</h1>
                    </div>
                    <div className='card'>
                        <div className='card-inner'>
                            <h3>Videos</h3>
                            <PiVideoLight className=' w-[40px] h-[40px]' />
                        </div>
                        <h1>{totalVideo}</h1>
                    </div>
                </div>





            </main>
        </>
    )
}

export default InfoUI