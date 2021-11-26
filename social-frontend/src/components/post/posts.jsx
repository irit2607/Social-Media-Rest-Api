import "./posts.css";
import { MoreVert } from "@material-ui/icons";
// import { Users } from "../../dummyData";
import { useState, useEffect } from "react";
import { format } from "timeago.js";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Posts({ post }) {
  const [like, setLike] = useState(post.likes.length)
  const [isLiked, setIsLiked] = useState(false)
  const [user, setUser] = useState({});

  useEffect(async () => {
    const fetchUser = async () => {
      const res = await axios.get(`/user?userId=${post.userId}`);
      setUser(res.data);
    }
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={user.profilePicture} alt=""
              />
            </Link>
            <span className="postUsername">
              {user.username}
              {/* 0 is first element */}
            </span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="https://pngimg.com/uploads/like/like_PNG14.png" onClick={likeHandler} alt="" />
            <img className="likeIcon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNM3M-RN1cvFkrzHZwUR6-hPELFjpACv1wyg&usqp=CAU" onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post?.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}