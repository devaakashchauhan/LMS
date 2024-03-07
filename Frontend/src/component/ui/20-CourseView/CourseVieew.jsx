import { useEffect, useState } from "react";
import axios from "axios";
import AllCoursesCardUI from "../27-AllCoursesCardUI/AllCoursesCardUI.jsx";


function CourseVieew() {

    const [videos, setVideos] = useState([])

    useEffect(() => {
        axios.post('/api/v1/users/allcourses',
        )
            .then(function ak(response) {
                console.log(response);
                setVideos(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    return (
        <>
            <div className='w-full bg-[#E9F8F3B2] p-0 '>
                <div className="text-center">
                    <h1 className='text-3xl py-3 font-bold '>Most Popular <span className='text-[#20B486]'>Courses</span></h1>
                </div>
                <div className=" md:max-w-[1480px] m-auto grid md:grid-cols-4 max-w-[600px]">
                    {videos.map((video, index) => (
                        <div key={index}>
                            <AllCoursesCardUI
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

export default CourseVieew