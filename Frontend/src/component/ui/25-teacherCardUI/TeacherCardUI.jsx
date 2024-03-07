import { useState } from "react"
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

const TeacherCardUI = ({ avatar, fullname, username, teacherid, onTeacherDelete }) => {
    const [handleDeletebtn, setHandleDeletebtn] = useState(false)

    const handleDelete = (teacherid) => {
        onTeacherDelete(teacherid);
        toast(`Teacher deleted successfully 😃`)
    };

    return (
        <>

            <div className="bg-white drop-shadow-md overflow-hidden rounded-2xl mr-4 my-4 card h-[400px]" >
                <img src={avatar} alt="" className="object-center w-full h-[200px]" />
                <div className="p-5  ">
                    <h1 className='py-2 truncate'>{fullname}</h1>
                    {/* <StarRating rating={course.rating} /> */}
                </div>
                <div className=" items-center justify-between">
                    <h3 className='p-5 text-2xl font-bold text-gray-900 '>{username}</h3>
                    <div className=" px-3 flex justify-between">
                        <Link
                            href="/videoPlayer"
                            className="me-[10px] text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        >
                            View
                        </Link>
                        <button
                            onClick={() => handleDelete(teacherid)}
                            className="me-[10px] text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 hover:cursor-pointer"
                        >
                            {handleDeletebtn ? "Deleting..." : "Delete"}
                        </button>
                    </div>
                </div>
                <div className="absolute top-0 bg-white m-5 px-2 py-[2.5px] rounded font-bold">
                    <h1>new</h1>
                </div>
            </div>
        </>
    )
}

export default TeacherCardUI

