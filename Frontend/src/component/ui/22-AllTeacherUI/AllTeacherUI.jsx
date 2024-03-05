import axios from "axios";
import { useEffect, useState } from "react";

import TeacherCardUI from "../25-teacherCardUI/TeacherCardUI";


function AllTeacherUI() {
    const [students, setStudent] = useState([])

    useEffect(() => {
        axios.post('/api/v1/users/allteacher',

        )
            .then(function ak(response) {
                // console.log(response);                
                setStudent(response.data.data)
            })
            .catch(function (error) {
                // console.log(error);
                console.log("please Enter valid User name and Id !!!")
            });
    }, [students])
    return (
        <>
            <div className='w-full bg-[#E9F8F3B2] p-0 maincard'>
                <div className="text-center">
                    <h1 className='text-3xl py-3 font-bold '>Most Popular <span className='text-[#20B486]'>Courses</span></h1>
                    <p className='text-[#6D737A]'>Various versions have evolved over the years, sometimes by accident.</p>
                </div>
                <div className=" md:max-w-[1480px] m-auto grid md:grid-cols-4 max-w-[600px]">
                    {students.map((student, index) => (
                        <div key={index}>
                            <TeacherCardUI
                                avatar={student.avatar}
                                fullname={student.fullname}
                                username={student.username}
                                _id={student._id}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AllTeacherUI

