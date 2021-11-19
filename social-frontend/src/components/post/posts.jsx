import "./posts.css";
import { MoreVert } from "@material-ui/icons";
import { useState } from "react";
import {Users} from "../../dummyData";

export default function posts({post}) {
  console.log(post);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
             src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt=""
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post?.userId)[0].username}
                {/* 0 is first element */}
            </span>
            <span className="postDate">{post.date}</span>
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
            <img className="likeIcon" src="https://pngimg.com/uploads/like/like_PNG14.png"  alt="" />
            <img className="likeIcon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNM3M-RN1cvFkrzHZwUR6-hPELFjpACv1wyg&usqp=CAU" alt="" />
            <span className="postLikeCounter">{post.like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post?.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}