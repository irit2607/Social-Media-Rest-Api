import {useEffect, useState} from "react";
import Share from "../share/share";
import Post from "../post/posts"
import "./feed.css";
// import {Posts} from "../../dummyData";
import axios from "axios"

export default function Feeds() {
  const [posts, setPosts] = useState([]);

  useEffect(async() => {
    const fetchPosts = async () => {
      const res = await axios.get("post/timeline/61926a495d9e1b1ca8ab3fb2")
      setPosts(res.data);
    }
   fetchPosts();
  }, [])
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
           <Post key={p.id} post={p}/>
        ))}
       
      </div>
    </div>
  );
}