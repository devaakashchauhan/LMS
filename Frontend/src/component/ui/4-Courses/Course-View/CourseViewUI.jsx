import CardUI from '../../5-Card/CardUI.jsx'
import { useEffect, useState } from 'react';
import axios from 'axios';

function CourseViewUI() {

    const [videos, setVideos] = useState([])
    useEffect(() => {
        axios.post('/api/v1/users/mycourses',
        )
            .then(function ak(response) {
                // console.log(response);                ;
                setVideos(response.data.data)
            })
            .catch(function (error) {
                // console.log(error);
                console.log("please Enter valid User name and Id !!!")
            });
    }, [])
    return (
        <>
            <div className='w-full bg-[#E9F8F3B2] p-0 maincard'>
                <div className="text-center">
                    <h1 className='text-3xl py-3 font-bold '><span className='text-[#20B486]'>Courses</span></h1>

                </div>
                <div className="grid md:grid-cols-4  ms-5 ">
                    {videos.map((video, index) => (
                        <div key={index}>
                            <CardUI
                                title={video.title}
                                description={video.description}
                                thumbnail={video.thumbnail}
                                video={video.video}
                                _id={video._id}
                                owner={video.owner}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CourseViewUI