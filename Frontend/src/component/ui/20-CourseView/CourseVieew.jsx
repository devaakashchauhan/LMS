import { useEffect, useState } from "react";
import CardUI from "../5-Card/CardUI"
import axios from "axios";


function CourseVieew() {

    const [videos, setVideos] = useState([])

    useEffect(() => {
        axios.post('/api/v1/users/allvideos',

        )
            .then(function ak(response) {
                // console.log(response);
                // console.log(response.data.data);
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
                    <h1 className='text-3xl py-3 font-bold '>Most Popular <span className='text-[#20B486]'>Courses</span></h1>
                    <p className='text-[#6D737A]'>Various versions have evolved over the years, sometimes by accident.</p>
                </div>
                <div className=" md:max-w-[1480px] m-auto grid md:grid-cols-4 max-w-[600px]">
                    {videos.map((video, index) => (
                        <div key={index}>
                            <CardUI
                                title={video.title}
                                description={video.description}
                                thumbnail={video.thumbnail}
                                video={video.video}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CourseVieew