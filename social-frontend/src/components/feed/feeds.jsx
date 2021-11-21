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
      const res = await axios.get("post/timeline/6190f8591875a62870ca91c8")
      setPosts(res.data);
    }
   fetchPosts();
  }, [])
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