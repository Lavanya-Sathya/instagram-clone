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
  const [profileReel, setProfileReel] = useState([]);
  const videoRefs = useRef([]);

  useEffect(() => {
    const userId = JSON.parse(sessionStorage.getItem("Token"));
    const fetchUserData = async () => {
      try {
        onSnapshot(
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

  const [isVideoPlaying, setIsVideoPlaying] = useState({});
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(null);
  // handle video play and pause
  const onVideoPress = (index) => {
    const videoRef = videoRefs.current[index];
    if (isVideoPlaying[index]) {
      videoRef.pause();
      setIsVideoPlaying((prev) => ({ ...prev, [index]: false }));
    } else {
      // Pause the currently playing video if there is one
      if (
        currentPlayingIndex !== null &&
        videoRefs.current[currentPlayingIndex]
      ) {
        videoRefs.current[currentPlayingIndex].pause();
        setIsVideoPlaying((prev) => ({
          ...prev,
          [currentPlayingIndex]: false,
        }));
      }

      videoRef.play();
      setIsVideoPlaying((prev) => ({ ...prev, [index]: true }));
      setCurrentPlayingIndex(index);
    }
  };

  return (
    <div className="ProfilePostCont mt-4">
      {profileReel.length > 0 ? (
        <div className="gridContainer">
          {profileReel.map((post, index) => (
            <div className="grid" key={post.id}>
              <div className="postVideo">
                <i
                  className="bi bi-play-fill playBtn"
                  style={{ display: isVideoPlaying[index] ? "none" : "block" }}
                  onClick={() => onVideoPress(index)}
                ></i>
                <video
                  src={post.data.postImage}
                  ref={(el) => (videoRefs.current[index] = el)}
                  onClick={() => onVideoPress(index)}
                  className="w-100"
                  loop={true}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          <h3>Share a moment with the World</h3>
          <p>Create your First Reel</p>
        </div>
      )}
    </div>
  );
}

export default ProfileReel;
