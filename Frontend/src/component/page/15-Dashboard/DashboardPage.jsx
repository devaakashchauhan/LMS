import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Cookies } from 'react-cookie';

function DashboardPage() {
    const cookies = new Cookies();
    const navigate = useNavigate();
    useEffect(() => {
        funredirect(cookies.get('role'))
    }, [])
    const funredirect = (role) => {
        role == "teacher" ? navigate("/teacherDashboard/profile") : role == "student" ? navigate("/studentDashboard/profile") : role == "admin" ? navigate("/adminDashboard/profile") : role != "admin" ? navigate("/login") : null
    }
    return (
        <>    </>
    )
}

export default DashboardPage