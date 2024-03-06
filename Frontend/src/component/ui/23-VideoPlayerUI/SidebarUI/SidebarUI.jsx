

function SidebarUI({ title, description, thumbnail, video, videoid, ownerid, owner }) {
    const setPlayerVideo = () => {
        localStorage.setItem("title", title)
        localStorage.setItem("description", description)
        localStorage.setItem("thumbnail", thumbnail)
        localStorage.setItem("video", video)
        localStorage.setItem("videoid", videoid)
        localStorage.setItem("ownerid", ownerid)
        localStorage.setItem("ownername", owner)
    }
    return (
        <>
            <div className="grid grid-cols-4 gap-4 my-5 ">
                <a href="/videoPlayer" onClick={setPlayerVideo} className="col-span-2">
                    <img className=" w-60 h-24 object-cover bg-white shadow-md rounded-lg overflow-hidden hover:cursor-pointer" src={thumbnail} />
                </a>
                <div className="p-4 col-span-2">
                    <h3 className="text-lg text-gray-600 font-medium">{title}</h3>
                    <p className="text-gray-600 text-sm">{owner}</p>
                </div>
            </div>
        </>
    )
}

export default SidebarUI