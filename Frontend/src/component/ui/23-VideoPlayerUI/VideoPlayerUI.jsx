import { useEffect, useState } from "react"
import axios from "axios";

function VideoPlayerUI() {
    const [video, setvideo] = useState('')
    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    const [thumbnail, setthumbnail] = useState('')
    const [_id, set_id] = useState('')
    const [avatar, setavatar] = useState('')
    const [owner, setowner] = useState('')
    const [createdAt, setcreatedAt] = useState('')
    const [ownerid, setownerid] = useState(localStorage.getItem("ownerid"))

    useEffect(() => {
        setvideo(localStorage.getItem("video"))
        settitle(localStorage.getItem("title"))
        setdescription(localStorage.getItem("description"))
        setthumbnail(localStorage.getItem("thumbnail"))
        set_id(localStorage.getItem("_id"))



        axios.post('/api/v1/users/username',
            { ownerid }
        )
            .then(function ak(response) {
                // console.log(response.data.data.username);
                console.log(response);
                setavatar(response.data.data.avatar)
                setowner(response.data.data.username)
                setcreatedAt(response.data.data.createdAt)
            })
            .catch(function (error) {
                console.log(error);

            });

    }, [])

    return (
        <>

            <div className="   grid grid-cols-3 gap-4  px-20 pt-20 pb-8">
                <div className=" col-span-2">
                    <video src={video} controls className="object-cover h-[600px] w-full overflow-hidden rounded-3xl border " />
                </div>
                <div className="h-[600px] w-full overflow-hidden rounded-3xl border pt-7 px-7">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam id tempora cum maxime, quasi, minus magni enim, quos quod excepturi quidem nostrum autem obcaecati nulla perspiciatis odio quibusdam minima eveniet.
                        Magni exercitationem nam quo, asperiores, rem perferendis, aperiam doloribus harum voluptate nostrum nobis ut excepturi atque distinctio! Tempora cum totam tenetur sit esse minima voluptatem et perferendis. Distinctio, quisquam maxime?</h1>
                </div>
            </div>
            <div className="px-20 ">
                <div className="">
                    <div className="pb-4 font-extrabold text-4xl">{title}</div>
                    <div className="flex gap-4 ">
                        <div className=" flex-none  max-w-[60px] max-h-[60px] border rounded-full overflow-hidden object-contain "><img src={avatar} /></div>
                        <div className="flex-auto max-h-[50px] pt-4 font-bold text-xl">{owner}</div>
                    </div>
                </div>
            </div>
            <div className="px-20 pt-5">
                <div className="overflow-hidden rounded-2xl border">
                    <div className="pb-4 font-thin text-xl p-4">{createdAt}</div>
                    <div className="pb-4 font-thin text-xl p-4">{description}</div>
                </div>
            </div>
        </>
    )
}

export default VideoPlayerUI