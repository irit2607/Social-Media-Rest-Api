
import Share from "../share/share";
import Post from "../post/posts"
import "./feed.css";

export default function feeds() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <Post/>
      </div>
    </div>
  );
}