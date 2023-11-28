import React, { useContext } from "react";
import "./Homepage.css";
import Sidenav from "../navigation/Sidenav";
import Timeline from "../timeline/Timeline";
import { Route, Routes, Navigate } from "react-router-dom";
import ImageUpload from "../timeline/ImageUpload/ImageUpload";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../timeline/Profile/Profile";
import Reels from "../timeline/Reels/Reels";
import Search from "../timeline/Search/Search";
import Explore from "../timeline/Explore/Explore";
import UserContextProvider from "./context/UserContextProvider";
import Message from "../timeline/Message/Message";
import Notification from "../timeline/Notification/Notification";
import UserTheme from "./context/UserTheme";
function Homepage() {
  const { isThemeModeLight } = useContext(UserTheme);
  const navigate = useNavigate();
  useEffect(() => {
    // authorization not provided to home page if the token is expired
    const userId = JSON.parse(sessionStorage.getItem("Token"));
    if (!userId) {
      alert("Session Expired.Please Log in again to continue");
      navigate("/");
    }
  }, []);
  return (
    <UserContextProvider>
      <div
        className="homepage"
        style={{
          backgroundColor: isThemeModeLight ? "white" : "black",
          color: isThemeModeLight ? "black" : "white",
        }}
      >
        <div className="homepageNav">
          <Sidenav />
        </div>
        <div className="homepageTimeline">
          {/* Route different pages after successfull login */}
          <Routes>
            <Route path="/" element={<Timeline />} />
            <Route path="/image-upload" element={<ImageUpload />} />
            <Route path="/userprofile" element={<Profile />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/search" element={<Search />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/message" element={<Message />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </UserContextProvider>
  );
}

export default Homepage;
