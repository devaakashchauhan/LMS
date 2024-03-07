import axios from "axios";
import { useEffect, useState } from "react";
import StudentCardUI from "../24-studentCardUI/StudentCardUI";


function AllStudentUI() {
  const [students, setStudent] = useState([])

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = () => {
    axios.post('/api/v1/users/allstudent')
      .then(function (response) {
        console.log(response);
        setStudent(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleVideoDelete = (studentid) => {
    axios.post('/api/v1/users/deletestudent',
      { studentid }
    )
      .then(function (response) {
        console.log(response);
        setStudent(prevstudents => prevstudents.filter(student => student._id !== studentid));

      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className='w-full bg-[#E9F8F3B2] p-0 maincard'>
        <div className="text-center">
          <h1 className='text-3xl py-3 font-bold '>All <span className='text-[#20B486]'>Students </span>Info</h1>
        </div>
        <div className=" md:max-w-[1480px] m-auto grid md:grid-cols-4 max-w-[600px]">
          {students.map((student, index) => (
            <div key={index}>
              <StudentCardUI
                ovStudentDelete={handleVideoDelete}
                avatar={student.avatar}
                fullname={student.fullname}
                username={student.username}
                studentid={student._id}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AllStudentUI