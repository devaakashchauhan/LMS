import { NavLink } from "react-router-dom";

function AdminSidebarUI() {
    return (
        <>
            <div className="  flex flex-col overflow-y-auto bg-white drop-shadow-md overflow-hidden rounded-2xl p-2 m-4">

                <div className="flex flex-col w-full gap-2 ">

                    <NavLink to="/adminDashboard/info" className={({ isActive }) => `block ${isActive ? "bg-green-200/100  " : "bg-white hover:bg-green-200/40"}  flex items-center  gap-x-2 rounded-lg overflow-hidden text-green-700 text-sm font-[500]  transition-all   pl-6`}>
                        <button type="button">
                            <div className="flex items-center gap-x-2 py-4">
                                All Info
                            </div>
                        </button>
                    </NavLink>
                    <NavLink to="/adminDashboard/profile" className={({ isActive }) => `block ${isActive ? "bg-green-200/100 " : "bg-white hover:bg-green-200/40"}  flex items-center  gap-x-2 rounded-lg overflow-hidden text-green-700 text-sm font-[500]  transition-all   pl-6`}>
                        <button type="button">
                            <div className="flex items-center gap-x-2 py-4">
                                Profile
                            </div>
                        </button>
                    </NavLink>

                    <NavLink to="/adminDashboard/allcourse" className={({ isActive }) => `block ${isActive ? "bg-green-200/100 " : "bg-white hover:bg-green-200/40"}  flex items-center  gap-x-2 rounded-lg overflow-hidden text-green-700 text-sm font-[500]  transition-all   pl-6`}>
                        <button type="button">
                            <div className="flex items-center gap-x-2 py-4">
                                Course
                            </div>
                        </button>
                    </NavLink>

                    <NavLink to="/adminDashboard/teachers" className={({ isActive }) => `block ${isActive ? "bg-green-200/100 " : "bg-white hover:bg-green-200/40"}  flex items-center  gap-x-2 rounded-lg overflow-hidden text-green-700 text-sm font-[500]  transition-all   pl-6`}>
                        <button type="button" >
                            <div className="flex items-center gap-x-2 py-4">
                                Teachers
                            </div>
                        </button>
                    </NavLink>

                    <NavLink to="/adminDashboard/students" className={({ isActive }) => `block ${isActive ? "bg-green-200/100 " : "bg-white hover:bg-green-200/40"}  flex items-center  gap-x-2 rounded-lg overflow-hidden text-green-700 text-sm font-[500]  transition-all   pl-6`}>
                        <button type="button" >
                            <div className="flex items-center gap-x-2 py-4">
                                Students
                            </div>
                        </button>
                    </NavLink>

                </div>
            </div>
        </>
    )
}

export default AdminSidebarUI