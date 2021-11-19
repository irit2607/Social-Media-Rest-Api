import "./posts.css";
import { MoreVert } from "@material-ui/icons";
import { useState } from "react";

export default function posts() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
             src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt=""
            />
            <span className="postUsername">
              
            </span>
            <span className="postDate">ww</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">heloo</span>
          <img className="postImg" src="https://img.freepik.com/free-photo/friendly-brunette-looking-camera_23-2147774849.jpg?size=626&ext=jpg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="https://pngimg.com/uploads/like/like_PNG14.png"  alt="" />
            <img className="likeIcon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNM3M-RN1cvFkrzHZwUR6-hPELFjpACv1wyg&usqp=CAU" alt="" />
            <span className="postLikeCounter"> people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"> comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}