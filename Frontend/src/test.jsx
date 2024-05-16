import { useEffect, useState } from "react";
import axios from "axios";
import SidebarUI from "./SidebarUI/SidebarUI";
import CommentUI from "../31-CommentsUI/CommentUI";
import ShowCommentBoxUI from "../32-ShowCommentBoxUI/ShowCommentBoxUI";

function VideoPlayerUI() {
    // video info
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [video, setVideo] = useState('');
    const [videoid, setVideoid] = useState('');
    const [ownerid, setOwnerid] = useState(localStorage.getItem("ownerid"));
    const [videoCreatedAt, setVideoCreatedAt] = useState('');
    const [userId, setUserId] = useState('');
    const [username, setUsername] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [hide, setHide] = useState(true);

    // owner  info
    const [owneravatar, setOwnerAvatar] = useState('');
    const [ownerUsername, setOwnerUsername] = useState('');

    // sidebar info
    const [allvideos, setAllVideos] = useState([]);
    const [allComments, setAllComments] = useState([]);

    useEffect(() => {
        setTitle(localStorage.getItem("title"));
        setDescription(localStorage.getItem("description"));
        setThumbnail(localStorage.getItem("thumbnail"));
        setVideo(localStorage.getItem("video"));
        setVideoid(localStorage.getItem("videoid"));
        setOwnerid(localStorage.getItem("ownerid"));
        setUserId(localStorage.getItem('userId'));
        setUsername(localStorage.getItem('userName'));
        setUserAvatar(localStorage.getItem('avatar'));

        fecthUserInfo(localStorage.getItem("ownerid"));
        fetchUserAllVideos(localStorage.getItem("ownerid"));
    }, [localStorage.getItem("videoid")]);

    const fecthUserInfo = (ownerid) => {
        axios.post('/api/v1/users/username', { ownerid })
            .then(function ak(response) {
                setOwnerAvatar(response.data.data.avatar);
                setOwnerUsername(response.data.data.username);
                setVideoCreatedAt(response.data.data.createdAt);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const fecthVideoComments = (videoid) => {
        axios.post('/api/v1/users/getComments', { videoid })
            .then(function ak(response) {
                setAllComments(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const sendVideoComments = (videoid, userId, comment, username, userAvatar) => {
        axios.post('/api/v1/users/setComment', { videoid, userId, comment, username, userAvatar })
            .then(function ak(response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const fetchUserAllVideos = (ownerid) => {
        axios.post('/api/v1/users/allvideos', { ownerid })
            .then(function ak(response) {
                setAllVideos(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const handleHide = () => {
        setHide(!hide);
        fecthVideoComments(videoid);
    };

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
                        <div className=" flex-none  max-w-[60px] max-h-[60px] border rounded-full overflow-hidden object-contain "><img src={owneravatar} alt="Owner Avatar" /></div>
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
                <div className="overflow-hidden rounded-2xl border p-5">
                    <CommentUI
                        setcomment={sendVideoComments}
                        videoid={videoid}
                        userId={userId}
                        username={username}
                        userAvatar={userAvatar}
                        fecthComments={fecthVideoComments}
                    />
                    <button type="button" onClick={handleHide} className="mt-3 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">{hide ? "Show" : "Hide"} Comments</button>
                    <div className="border p-3 rounded-lg">
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
            </div>
        </>
    );
}

export default VideoPlayerUI;
