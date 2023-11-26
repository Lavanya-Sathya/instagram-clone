import React, { useState, useEffect } from "react";
import "./Reels.css";
import { db } from "../../Firebase/Firebase";
import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import userProfile from "@/image/img.jpg";

import ReelVideo from "./ReelVideo";
function Reels() {
  const [profileReel, setProfileReel] = useState(null);
  useEffect(() => {
    // Fetch the current user's post data from the firebase
    const fetchUserData = async () => {
      try {
        const snapshot = await onSnapshot(
          query(
            collection(db, "posts"),
            where("type", "==", "video"),
            orderBy("timestamp", "desc")
          ),
          (querySnapshot) => {
            const postsArray = [];
            querySnapshot.forEach((doc) => {
              console.log(doc.id, " => ", doc.data());
              postsArray.push({ id: doc.id, data: doc.data() });
            });
            setProfileReel(postsArray);
          }
        );
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);
  return (
    <div className="reelsMainContainer">
      <div className="reelContainer">
        <div className="reelVideos">
          {profileReel &&
            profileReel.map((post) => (
              <ReelVideo
                key={post.id}
                channel={post.data.user}
                avatarSrc={userProfile}
                song="music name"
                url={post.data.postImage}
                likes="200"
                comments="20"
                caption={post.data.caption}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Reels;
