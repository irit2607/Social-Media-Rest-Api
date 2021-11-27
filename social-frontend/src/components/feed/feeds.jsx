import {useEffect, useState} from "react";
import Share from "../share/share";
import Post from "../post/posts"
import "./feed.css";
// import {Posts} from "../../dummyData";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Feeds({username}) {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  useEffect(async() => {
    const fetchPosts = async () => {
      const res = username 
      ? await axios.get("/post/profile/" + username)                    //profile pg
      : await axios.get("post/timeline/" + user._id)                      //mainpg
      setPosts(res.data);
    }
   fetchPosts();
  }, [username])
  return (
    <div className="feed">
       <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}