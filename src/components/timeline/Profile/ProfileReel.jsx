import React, { useEffect, useState, useRef } from "react";
import { db } from "../../Firebase/Firebase";
import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import "./Profile.css";
function ProfileReel() {
  const [profileReel, setProfileReel] = useState(null);
  useEffect(() => {
    // Fetch the current user's post data from the firebase
    const userId = JSON.parse(sessionStorage.getItem("Token"));
    const fetchUserData = async () => {
      try {
        const snapshot = await onSnapshot(
          query(
            collection(db, "posts"),
            where("uid", "==", userId),
            where("type", "==", "video"),
            orderBy("timestamp", "desc")
          ),
          (querySnapshot) => {
            const postsArray = [];
            querySnapshot.forEach((doc) => {
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
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      // pause video
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      // play video
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };
  return (
    <div className="ProfilePostCont mt-4">
      {profileReel ? (
        <div className="gridContainer">
          {profileReel.map((post) => (
            <div className="grid" key={post.id}>
              {console.log(post.data.postImage)}
              <video
                src={post.data.postImage}
                alt="pics"
                ref={videoRef}
                onClick={onVideoPress}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center ">
          <h3>Share a moment with the World</h3>
          <p>Create your First Reel</p>
        </div>
      )}
    </div>
  );
}

export default ProfileReel;
