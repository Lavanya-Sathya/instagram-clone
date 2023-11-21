import React from "react";
import "./Homepage.css";
import Sidenav from "../navigation/Sidenav";
import Timeline from "../timeline/Timeline";
import { Route, Routes, Navigate } from "react-router-dom";
import ImageUpload from "../timeline/ImageUpload/ImageUpload";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase/Firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import Profile from "../timeline/Profile/Profile";
function Homepage() {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const userId = JSON.parse(sessionStorage.getItem("Token"));
    if (!userId) {
      alert("Session Expired.Please Log in again to continue");
      navigate("/");
    }
    const fetchUserData = async () => {
      try {
        const snapshot = await onSnapshot(
          query(collection(db, "users"), where("uid", "==", userId)),
          (querySnapshot) => {
            // const postsArray = [];
            querySnapshot.forEach((doc) => {
              // console.log(doc.id, " => ", doc.data());
              setUser({ id: doc.id, data: doc.data() });
            });
            // setUser(postsArray);
          }
        );
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);
  return (
    <div className="homepage">
      <div className="homepageNav">
        <Sidenav user={user} />
      </div>
      <div className="homepageTimeline">
        <Routes>
          <Route path="/" element={<Timeline />} />
          <Route path="/image-upload" element={<ImageUpload user={user} />} />
          <Route path="/userprofile" element={<Profile user={user} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default Homepage;
