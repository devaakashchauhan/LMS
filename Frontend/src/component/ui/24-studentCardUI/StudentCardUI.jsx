import { useState } from "react"
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const TeacherCardUI = ({ avatar, fullname, username, studentid, ovStudentDelete }) => {
    const [handleDeletebtn, setHandleDeletebtn] = useState(false)

    const handelUpdate = (studentid) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(studentid)
            }
        });
    }

    const handleDelete = (studentid) => {
        ovStudentDelete(studentid);
        toast(`Video deleted successfully 😃`)
    };


    return (
        <>
            <li className="flex justify-between gap-x-6 py-5 my-1 px-3 bg-white shadow-lg rounded-md border-transparent">
                <div className="flex min-w-0 gap-x-4">
                    <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={avatar} alt="" />
                    <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">{fullname}</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">leslie.alexander@example.com</p>
                    </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">Teacher</p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">{username}</p>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <button
                        onClick={() => handelUpdate(studentid)}
                        className="me-[10px] text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 hover:cursor-pointer"
                    >
                        {handleDeletebtn ? "Deleting..." : "Delete"}
                    </button>
                </div>
            </li >
        </>
    )
}

export default TeacherCardUI

