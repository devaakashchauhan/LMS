import ProfileUI from '../../ui/16-Profile/ProfileUI'
import AdminSidebarUI from '../../ui/15-Sidebar/AdminSidebarUI'
import Userchk from '../../ui/19-UserChk/Userchk'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminDashboardPage() {
    const navigate = useNavigate()

    axios.post('/api/v1/users/userDetails',

    )
        .then(function ak(response) {
            // console.log(response);
            console.log(response);

            const user = response.data.data.role;
            if (user !== "admin") {
                navigate("/login")
            }
        })
        .catch(function (error) {
            // console.log(error);

        });
    return (
        <>
            <Userchk />
            <div className="h-full grid grid-cols-6 border border-b">

                <div className="hidden md:flex h-full  flex-col   ">
                    <AdminSidebarUI />
                </div>
                <main className=" md:pl-56 col-span-5 py-10"><ProfileUI /></main>
            </div>
        </>
    )
}

export default AdminDashboardPage