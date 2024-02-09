const TeacherCardUI = ({ avatar, fullname, username }) => {

    return (
        <>

            <div className="bg-white drop-shadow-md overflow-hidden rounded-2xl mr-4 my-4 card" >
                <img src={avatar} alt="" className="max-h-72 w-full object-cover p-3 rounded-3xl" style={{ height: "200px" }} />
                <div className="p-5  ">
                    <h1 className='py-2 truncate'>{fullname}</h1>
                    {/* <StarRating rating={course.rating} /> */}
                </div>
                <div className="flex items-center justify-between">
                    <h3 className='p-5 text-2xl font-bold text-gray-900 '>{username}</h3>
                    <a
                        href="/videoPlayer"
                        className="me-[10px] text-white bg-[#20B486] hover:bg-[#20B486] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                        Play
                    </a>
                </div>
                <div className="absolute top-0 bg-white m-5 px-2 py-[2.5px] rounded font-bold">
                    <h1>new</h1>
                </div>
            </div>
        </>
    )
}

export default TeacherCardUI

