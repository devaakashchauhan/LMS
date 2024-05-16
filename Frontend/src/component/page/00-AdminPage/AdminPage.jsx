import Sidebar from '../../ui/15-Sidebar/Sidebar';
import ProfileUI from '../../ui/16-Profile/ProfileUI';


const AdminPage = () => {

    return (
        <>
            <div className="h-full grid grid-cols-6 border border-b">

                <div className="hidden md:flex h-full  flex-col   ">
                    <Sidebar />
                </div>
                <main className=" md:pl-56 col-span-5 py-10"><ProfileUI /></main>
            </div>
        </>
    )
}

export default AdminPage