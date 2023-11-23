import React, { useEffect, useState } from "react";
import { db } from "../../Firebase/Firebase";
import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import "./Profile.css";
function ProfilePost() {
  const [profilePost, setProfilePost] = useState(null);
  useEffect(() => {
    // Fetch the current user's post data from the firebase
    const userId = JSON.parse(sessionStorage.getItem("Token"));
    const fetchUserData = async () => {
      try {
        const snapshot = await onSnapshot(
          query(
            collection(db, "posts"),
            where("uid", "==", userId),
            where("type", "==", "image"),
            orderBy("timestamp", "desc")
          ),
          (querySnapshot) => {
            const postsArray = [];
            querySnapshot.forEach((doc) => {
              postsArray.push({ id: doc.id, data: doc.data() });
            });
            setProfilePost(postsArray);
          }
        );
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);
  return (
    <div className="ProfilePostCont mt-5">
      {profilePost ? (
        <div className="gridContainer">
          {profilePost.map((post) => (
            <div className="grid" key={post.id}>
              {console.log(post.data.postImage)}
              <img src={post.data.postImage} alt="pics" />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center ">
          <h3>Share a moment with the World</h3>
          <p>Create your First Post</p>
        </div>
      )}
    </div>
  );
}

export default ProfilePost;
