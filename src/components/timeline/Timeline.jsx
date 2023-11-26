import { useState, useEffect } from "react";
import "./timeline.css";
import Sugesstions from "./Sugesstions";
import Post from "./post/Post";
import { db } from "../Firebase/Firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
function Timeline() {
  // variables to keep track of loading, error and store post details
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // Load the post details from firebase
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const q = query(collection(db, "posts"));
        const unsubscribe = await onSnapshot(
          query(collection(db, "posts"), orderBy("timestamp", "desc")),
          (querySnapshot) => {
            const postsArray = [];
            querySnapshot.forEach((doc) => {
              postsArray.push({ id: doc.id, data: doc.data() });
            });
            setPosts(postsArray);
            setIsLoading(false);
          }
        );
        return () => unsubscribe();
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="timeline">
      <div className="timelineLeft mt-1">
        {isLoading && <p className="text-center h2 m5">Loading...</p>}
        {error && <p className="text-center h2 m5">Error loading data</p>}
        {!isLoading && !error && (
          <div className="postTimeline mb-5">
            {posts.map((post) => (
              <Post
                key={post.id}
                user={post.data.user}
                postImage={post.data.postImage}
                likes={post.data.likes}
                timestamp={post.data.timestamp}
                caption={post.data.caption}
                type={post.data.type}
              />
            ))}
          </div>
        )}
      </div>
      <div className="timelineRight">
        <Sugesstions />
      </div>
    </div>
  );
}

export default Timeline;
