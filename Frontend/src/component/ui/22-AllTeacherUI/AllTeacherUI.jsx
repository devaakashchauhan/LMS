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
    };

    return (
        <>
            <div className='w-full bg-[#E9F8F3B2] '>
                <div className="text-center">
                    <h1 className='text-3xl py-3 font-bold '>Most Popular <span className='text-[#20B486]'>Teacher</span></h1>
                </div>
                <div className=" md:max-w-[1480px] max-w-[600px] m-auto px-5 grid md:grid-cols-4 ">
                    {teachers.map((teacher, index) => (
                        <div key={index}>
                            <TeacherCardUI
                                onTeacherDelete={handleTeacherDelete}
                                avatar={teacher.avatar}
                                fullname={teacher.fullname}
                                username={teacher.username}
                                teacherid={teacher._id}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AllTeacherUI

