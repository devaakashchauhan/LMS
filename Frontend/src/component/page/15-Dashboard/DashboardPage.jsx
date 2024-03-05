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

    role == "teacher" ? navigate("/teacherDashboard/profile") : role == "student" ? navigate("/studentDashboard/profile") : role == "admin" ? navigate("/adminDashboard/profile") : role != "admin" ? navigate("/login") : null

    return (
        <>    </>
    )
}

export default DashboardPage