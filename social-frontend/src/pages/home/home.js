import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/SideBar'
import Feed from '../../components/feed/feeds'
import Rightbar from '../../components/rightbar/rightbar'
import "./home.css";

const home = () => {
  return (
    <>
      <>
        <Topbar />
        <div className="homeContainer">
          <Sidebar />
          <Feed />
          <Rightbar />
        </div>
      </>
    </>
  )
}

export default home
