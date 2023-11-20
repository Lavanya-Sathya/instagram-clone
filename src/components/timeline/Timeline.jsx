import { useState, useEffect } from "react";
import "./timeline.css";
import Sugesstions from "./Sugesstions";
import Post from "./post/Post";
import post1 from "@/image/post/post1.jpg";
import post2 from "@/image/post/post2.jpg";
import post3 from "@/image/post/post3.jpg";
import post4 from "@/image/post/post4.jpg";
import { db } from "../Firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
function Timeline() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const userId = JSON.parse(sessionStorage.getItem("user"));
    if (!userId) {
      alert("Session Expired.Please Log in again to continue");
      navigate("/");
    }
    const fetchData = async () => {
      try {
        // const q = query(collection(db, "posts"));
        const snapshot = await onSnapshot(
          query(collection(db, "posts")),
          (querySnapshot) => {
            const postsArray = [];
            querySnapshot.forEach((doc) => {
              postsArray.push({ id: doc.id, data: doc.data() });
            });
            setPosts(postsArray);
          }
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="timeline">
      <div className="timelineLeft mt-1">
        <div className="postTimeline mb-5">
          {posts.map((post) => (
            <Post
              key={post.id}
              user={post.data.user}
              postImage={post.data.postImage}
              likes={post.data.likes}
              timestamp={post.data.timestamp}
              caption={post.data.caption}
            />
          ))}
        </div>
      </div>
      <div className="timelineRight">
        <div className="sugesstionTime d-flex align-items-center justify-content-between p-2 mb-3">
          <p className="h6 mb-0">Suggested for you</p>
          <a href="" className="text-decoration-none">
            See All
          </a>
        </div>
        <Sugesstions />
        <Sugesstions />
        <Sugesstions />
      </div>
    </div>
  );
}

export default Timeline;
