import UserSiderbarUI from '../../ui/15-Sidebar/UserSiderbarUI.jsx'
import Userchk from '../../ui/19-UserChk/Userchk.jsx'
import { Outlet } from 'react-router-dom';

function UserDashboarsPage() {
  return (
    <>
      <Userchk />
      <div className="h-full grid grid-cols-6 border border-b">

        <div className="hidden md:flex h-full  flex-col   ">
          <UserSiderbarUI />
        </div>
        <main className="col-span-5 py-10"><Outlet /></main>
      </div>
    </>
  )
}

export default UserDashboarsPage