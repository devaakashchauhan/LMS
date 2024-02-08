
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cookies } from 'react-cookie';



function DashboardPage() {
    const cookies = new Cookies();

    const navigate = useNavigate()
    const [role, setRole] = useState('');
    useEffect(() => {
        setRole(cookies.get('role'))
    }, [])

    console.log(cookies.get('refreshToken'))



    role == "teacher" ? navigate("/teacherDashboard") : role == "student" ? navigate("/studentDashboard") : role == "admin" ? navigate("/adminDashboard") : role != "admin" ? navigate("/login") : null

    return (
        <>    </>
    )





}

export default DashboardPage