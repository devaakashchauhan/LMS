import TeacherSidebarUI from '../../ui/15-Sidebar/TeacherSidebarUI'
import axios from 'axios';
import { Outlet, useNavigate } from 'react-router-dom';

function TeacherDashboardPage() {
    const navigate = useNavigate()

    axios.post('/api/v1/users/userDetails',
    )
        .then(function ak(response) {
            // console.log(response);

            const user = response.data.data.role;
            if (user !== "teacher") {
                navigate("/login")
            }
        })
        .catch(function (error) {
            // console.log(error);
        });
    return (
        <>
            <div className="h-full grid grid-cols-6 border border-b">
                <div className="hidden md:flex h-full  flex-col   ">
                    <TeacherSidebarUI />
                </div>
                <main className=" col-span-5 "><Outlet /></main>
            </div>
        </>
    )
}

export default TeacherDashboardPage