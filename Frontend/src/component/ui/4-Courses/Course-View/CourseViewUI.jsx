import { useEffect, useState } from 'react';
import axios from 'axios';
import TeacherCardUI from '../../30-TeacherCardUI/TeacherCardUI.jsx';

function CourseViewUI() {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = () => {
        axios.post('/api/v1/users/mycourses')
            .then(function (response) {
                console.log(response);
                setVideos(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const handleVideoDelete = (videoId) => {
        axios.post('/api/v1/users/deletevideo',
            { videoId }
        )
            .then(function (response) {
                console.log(response);
                setVideos(prevVideos => prevVideos.filter(video => video._id !== videoId));
            })
            .catch(function (error) {
                console.log(error);
            });
    };



    return (
        <>
            <div className='w-full bg-[#E9F8F3B2] p-0 maincard'>
                <div className="text-center">
                    <h1 className='text-3xl py-3 font-bold '><span className='text-[#20B486]'>Courses</span></h1>
                </div>
                <div className="grid md:grid-cols-4  ms-5 ">
                    {videos.map((video, index) => (
                        <div key={index}>
                            <TeacherCardUI
                                onVideoDelete={handleVideoDelete}
                                title={video.title}
                                description={video.description}
                                thumbnail={video.thumbnail}
                                video={video.video}
                                videoid={video._id}
                                ownerid={video.owner}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CourseViewUI