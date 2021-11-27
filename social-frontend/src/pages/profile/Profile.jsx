import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/SideBar";
import Feed from "../../components/feed/feeds";
import Rightbar from "../../components/rightbar/Rightbar";
import { useState, useEffect } from "react";
import axios from "axios";
import {useParams} from "react-router";


export default function Profile() {
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(async () => {
    const fetchUser = async () => {
      const res = await axios.get(`/user?username=${username}`);
      setUser(res.data);
    }
    fetchUser([username]);
  },[] );


  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user.CoverPicture}
                alt=""
              />
              <img
                className="profileUserImg"
                src={user.profilePicture}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username}/>
            <Rightbar user = {user}/>
          </div>
        </div>
      </div>
    </>
  );
}