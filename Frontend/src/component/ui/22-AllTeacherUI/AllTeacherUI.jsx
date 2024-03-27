import axios from "axios";
import { useEffect, useState } from "react";
import TeacherCardUI from "../25-teacherCardUI/TeacherCardUI";

function AllTeacherUI() {
    const [teachers, setTeachers] = useState([])

    useEffect(() => {
        fetchTeacher();
    }, []);

    const fetchTeacher = () => {
        axios.post('/api/v1/users/allteacher')
            .then(function (response) {
                console.log(response);
                setTeachers(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const handleTeacherDelete = (teacherid) => {
        hendleteacherinfo(teacherid);
        hendleteachervideos(teacherid)
    };

    const hendleteacherinfo = (teacherid) => {
        axios.post('/api/v1/users/deleteteacher',
            { teacherid }
        )
            .then(function (response) {
                console.log(response);
                setTeachers(prevTeachers => prevTeachers.filter(teacher => teacher._id !== teacherid));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const hendleteachervideos = (teacherid) => {
        axios.post('/api/v1/users/deleteteachervideo',
            { teacherid }
        )
            .then(function (response) {
                console.log(response);
                setTeachers(prevTeachers => prevTeachers.filter(teacher => teacher._id !== teacherid));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <div className='w-full bg-[#E9F8F3B2] bg-white'>
                <div className="text-center">
                    <h1 className='text-3xl py-3 font-bold '>All <span className='text-[#20B486]'>Teacher </span>Info</h1>
                </div>
                <div className="px-32 ">
                    <ul role="list" className="divide-y divide-gray-100">
                        {teachers.map((teacher, index) => (
                            <div key={index}>
                                <TeacherCardUI
                                    onTeacherDelete={handleTeacherDelete}
                                    avatar={teacher.avatar}
                                    fullname={teacher.fullname}
                                    username={teacher.username}
                                    teacherid={teacher._id}
                                    email={teacher.email}
                                />
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AllTeacherUI

