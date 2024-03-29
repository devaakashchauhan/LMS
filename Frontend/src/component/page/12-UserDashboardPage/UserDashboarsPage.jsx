import UserSiderbarUI from '../../ui/15-Sidebar/UserSiderbarUI.jsx'
import { Outlet } from 'react-router-dom';

function UserDashboarsPage() {
  return (
    <>
      <div className="h-full grid grid-cols-6">
        <div className="hidden md:flex   flex-col   ">
          <UserSiderbarUI />
        </div>
        <main className="col-span-5 pt-5 pb-14"><Outlet /></main>
      </div>
    </>
  )
}

export default UserDashboarsPage