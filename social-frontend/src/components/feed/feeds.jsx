
import Share from "../share/share";
import Post from "../post/posts"
import "./feed.css";
import {Posts} from "../../dummyData";

export default function feeds() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
           <Post key={p.id} post={p}/>
        ))}
       
      </div>
    </div>
  );
}