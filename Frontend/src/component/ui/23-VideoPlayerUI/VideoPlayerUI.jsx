import { useEffect, useState } from "react"
import axios from "axios";
import SidebarUI from "./SidebarUI/SidebarUI";

function VideoPlayerUI() {
    // video info
    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    const [thumbnail, setthumbnail] = useState('')
    const [video, setvideo] = useState('')
    const [videoid, setvideoid] = useState('')
    const [ownerid, setownerid] = useState(localStorage.getItem("ownerid"))
    const [videoCreatedAt, setVideoCreatedAt] = useState('')

    // owner  info
    const [owneravatar, setOwneravatar] = useState('')
    const [ownerUsername, setOwnerUsername] = useState('')

    // sidebar info
    const [allvideos, setAllvideos] = useState([])

    useEffect(() => {
        settitle(localStorage.getItem("title"))
        setdescription(localStorage.getItem("description"))
        setthumbnail(localStorage.getItem("thumbnail"))
        setvideo(localStorage.getItem("video"))
        setvideoid(localStorage.getItem("videoid"))
        setownerid(localStorage.getItem("ownerid"))

        axios.post('/api/v1/users/username',
            { ownerid }
        )
            .then(function ak(response) {
                // console.log(response);
                setOwneravatar(response.data.data.avatar)
                setOwnerUsername(response.data.data.username)
                setVideoCreatedAt(response.data.data.createdAt)
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.post('/api/v1/users/allvideos',
            { ownerid }
        )
            .then(function ak(response) {
                console.log("all video info", response.data.data);
                setAllvideos(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    })

    return (
        <>

            <div className="grid grid-cols-3 gap-4  px-20 pt-20 pb-8">
                <div className=" col-span-2">
                    <video src={video} controls className="object-cover h-[600px] w-full overflow-hidden rounded-3xl border " />
                </div>
                <div className="h-[600px] w-full overflow-hidden rounded-3xl border pt-7 px-7">
                    {allvideos.map((video, index) => (
                        (video._id === videoid) ? null :
                            <div key={index}>
                                <SidebarUI
                                    title={video.title}
                                    description={video.description}
                                    thumbnail={video.thumbnail}
                                    video={video.video}
                                    videoid={video._id}
                                    ownerid={video.owner}
                                    owner={ownerUsername}
                                />
                            </div>
                    ))}
                </div>
            </div>
            <div className="px-20 ">
                <div className="">
                    <div className="pb-4 font-extrabold text-4xl">{title}</div>
                    <div className="flex gap-4 ">
                        <div className=" flex-none  max-w-[60px] max-h-[60px] border rounded-full overflow-hidden object-contain "><img src={owneravatar} /></div>
                        <div className="flex-auto max-h-[50px] pt-4 font-bold text-xl">{ownerUsername}</div>
                    </div>
                </div>
            </div>
            <div className="px-20 pt-5">
                <div className="overflow-hidden rounded-2xl border">
                    <div className="pb-4 font-thin text-xl p-4">{videoCreatedAt}</div>
                    <div className="pb-4 font-thin text-xl p-4">{description}</div>
                </div>
            </div>
        </>
    )
}

export default VideoPlayerUI