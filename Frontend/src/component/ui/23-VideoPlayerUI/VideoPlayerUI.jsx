import { useEffect, useState } from "react"
import axios from "axios";
import SidebarUI from "./SidebarUI/SidebarUI";
import CommentUI from "../31-CommentsUI/CommentUI";
import ShowCommentBoxUI from "../32-ShowCommentBoxUI/ShowCommentBoxUI";

function VideoPlayerUI() {
    // video info
    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    const [thumbnail, setthumbnail] = useState('')
    const [video, setvideo] = useState('')
    const [videoid, setvideoid] = useState('')
    const [ownerid, setownerid] = useState(localStorage.getItem("ownerid"))
    const [videoCreatedAt, setVideoCreatedAt] = useState('')
    const [userId, setuserId] = useState('')
    const [username, setusername] = useState('')
    const [userAvatar, setuserAvatar] = useState('')
    const [hide, sethide] = useState(true)

    // owner  info
    const [owneravatar, setOwneravatar] = useState('')
    const [ownerUsername, setOwnerUsername] = useState('')

    // sidebar info
    const [allvideos, setAllvideos] = useState([])
    const [allComments, setallComments] = useState([])

    useEffect(() => {
        settitle(localStorage.getItem("title"))
        setdescription(localStorage.getItem("description"))
        setthumbnail(localStorage.getItem("thumbnail"))
        setvideo(localStorage.getItem("video"))
        setvideoid(localStorage.getItem("videoid"))
        setownerid(localStorage.getItem("ownerid"))
        setuserId(localStorage.getItem('userId'))
        setusername(localStorage.getItem('userName'))
        setuserAvatar(localStorage.getItem('avatar'))


        fecthUserInfo(localStorage.getItem("ownerid"));
        fetchUserAllVideos(localStorage.getItem("ownerid"));
    }, [localStorage.getItem("videoid")])

    const fecthUserInfo = (ownerid) => {
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
    }



    const fecthVideoComments = (videoid) => {
        axios.post('/api/v1/users/getComments',
            { videoid }
        )
            .then(function ak(response) {
                console.log(response);
                setallComments(response.data.data)


            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const sendVideoComments = (videoid, userId, comment, username, userAvatar) => {
        axios.post('/api/v1/users/setComment',
            { videoid, userId, comment, username, userAvatar }
        )
            .then(function ak(response) {
                console.log(response);



            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const fetchUserAllVideos = (ownerid) => {

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
    }

    useEffect(() => {
        fecthVideoComments(videoid)
    }, [videoid]);

    const handelhide = () => {
        sethide(!hide)
        fecthVideoComments(videoid)
    }

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
                                    onVideoChange={fetchUserAllVideos}
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
            <div className="px-20 pt-5">

                <div className="">
                    <CommentUI
                        setcommentfun={sendVideoComments}
                        getcomment={fecthVideoComments}
                        videoid={videoid}
                        userId={userId}
                        username={username}
                        userAvatar={userAvatar}
                    />
                </div>

                <div className="py-3">
                    <button type="button" onClick={handelhide} className="p-3  text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm  text-center "> {hide ? "Show" : "Hide"} Comments</button>
                </div>

                <div className="  ">
                    {hide ? null : allComments.map((comment, index) => (
                        <div key={index}>
                            <ShowCommentBoxUI
                                comment={comment.comment}
                                userAvatar={comment.userAvatar}
                                username={comment.username}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default VideoPlayerUI