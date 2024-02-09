import { useEffect, useState } from "react"

function VideoPlayerUI() {
    const [video, setvideo] = useState('')
    useEffect(() => {
        setvideo(localStorage.getItem("playerVideo"))
    }, [])

    return (
        <div className=" items-center  border border-black px-auto">
            <video src={video} controls className=" h-[600px] w-full " />
        </div>
    )
}

export default VideoPlayerUI