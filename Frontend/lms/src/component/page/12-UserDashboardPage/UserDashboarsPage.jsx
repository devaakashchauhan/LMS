import React from 'react'
import UserSiderbarUI from '../../ui/15-Sidebar/UserSiderbarUI.jsx'
import ProfileUI from '../../ui/16-Profile/ProfileUI'

function UserDashboarsPage() {
  return (
    <>
      <div className="h-full grid grid-cols-6 border border-b">

        <div className="hidden md:flex h-full  flex-col   ">
          <UserSiderbarUI />
        </div>
        <main className=" md:pl-56 col-span-5 py-10"><ProfileUI /></main>
      </div>
    </>
  )
}

export default UserDashboarsPage