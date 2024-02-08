
import { NavLink } from "react-router-dom";

function UserSiderbarUI() {
    return (
        <>
            <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">

                <div className="flex flex-col w-full gap-1">

                    <button

                        type="button"
                        className={"flex items-center py-4 gap-x-2 text-sky-700 text-sm font-[500]  transition-all bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700 pl-6"}
                    >
                        <div className="flex items-center gap-x-2 py-4">
                            {/* todo put icon */}
                            <NavLink to="/studentDashboard/profile"                          >

                                Profile
                            </NavLink>
                        </div>
                    </button>
                    <button

                        type="button"
                        className={"flex items-center py-4 gap-x-2 text-sky-700 text-sm font-[500]  transition-all bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700 pl-6"}
                    >
                        <div className="flex items-center gap-x-2 py-4">
                            {/* todo put icon */}
                            Course
                        </div>
                    </button>
                    <button

                        type="button"
                        className={"flex items-center py-4 gap-x-2 text-sky-700 text-sm font-[500]  transition-all bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700 pl-6"}
                    >
                        <div className="flex items-center gap-x-2 py-4">
                            {/* todo put icon */}
                            History
                        </div>
                    </button>



                </div>
            </div>
        </>
    )
}

export default UserSiderbarUI