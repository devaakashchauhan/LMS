import { NavLink } from "react-router-dom";

function TeacherSidebarUI() {
    return (
        <>
            <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">

                <div className="flex flex-col w-full gap-1">

                    <button type="button"
                        className={"flex items-center py-4 gap-x-2 text-green-700 text-sm font-[500]  transition-all bg-green-200/20 hover:bg-green-200/20 hover:text-green-700 pl-6"}
                    >
                        <div className="flex items-center gap-x-2 py-4">
                            <NavLink to="/teacherDashboard/profile"                          >
                                Profile
                            </NavLink>
                        </div>
                    </button>
                    <button
                        type="button"
                        className={"flex items-center py-4 gap-x-2 text-green-700 text-sm font-[500]  transition-all bg-green-200/20 hover:bg-green-200/20 hover:text-green-700 pl-6"}
                    >
                        <div className="flex items-center gap-x-2 py-4">
                            <NavLink to="/teacherDashboard/courseview"                           >
                                All Course
                            </NavLink>
                        </div>
                    </button>
                    <button
                        type="button"
                        className={"flex items-center py-4 gap-x-2 text-green-700 text-sm font-[500]  transition-all bg-green-200/20 hover:bg-green-200/20 hover:text-green-700 pl-6"}
                    >
                        <div className="flex items-center gap-x-2 py-4">
                            <NavLink to="/teacherDashboard/createcourse"                           >
                                Create Courses
                            </NavLink>
                        </div>
                    </button>

                </div>
            </div>
        </>
    )
}

export default TeacherSidebarUI