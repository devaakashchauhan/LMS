import { Link } from "react-router-dom"

function SidebarUI({ title, description, thumbnail, video, videoid, ownerid, owner, onVideoChange, createdAt }) {
    const setPlayerVideo = (ownerid) => {
        onVideoChange(ownerid)
        localStorage.setItem("title", title)
        localStorage.setItem("description", description)
        localStorage.setItem("thumbnail", thumbnail)
        localStorage.setItem("video", video)
        localStorage.setItem("videoid", videoid)
        localStorage.setItem("ownerid", ownerid)
        localStorage.setItem("ownername", owner)
        localStorage.setItem("createdAt", createdAt)

    }
    return (
        <>
            <div className="grid grid-cols-4 gap-4 my-5 ">
                <Link
                    to="/videoPlayer"
                    onClick={() => setPlayerVideo(ownerid)}
                    className="col-span-2  hover:cursor-pointer"
                >
                    <img className=" w-60 h-24 object-cover bg-white shadow-md rounded-lg overflow-hidden" src={thumbnail} />
                </Link>
                <div className="p-4 col-span-2">
                    <h3 className="text-lg text-gray-600 font-medium">{title}</h3>
                    <p className="text-gray-600 text-sm">{owner}</p>
                </div>
            </div>
        </>
    )
}

export default SidebarUI