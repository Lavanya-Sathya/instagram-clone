import React from "react";
import "./Homepage.css";
import Sidenav from "../navigation/Sidenav";
import Timeline from "../timeline/Timeline";
import { Route, Routes, Navigate } from "react-router-dom";
import ImageUpload from "../timeline/ImageUpload/ImageUpload";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Homepage() {
  const navigate = useNavigate();
  useEffect(() => {
    const userId = JSON.parse(sessionStorage.getItem("Token"));
    if (!userId) {
      alert("Session Expired.Please Log in again to continue");
      navigate("/");
    }
  });
  return (
    <div className="homepage">
      <div className="homepageNav">
        <Sidenav />
      </div>
      <div className="homepageTimeline">
        <Routes>
          <Route path="/" element={<Timeline />} />
          <Route path="/image-upload" element={<ImageUpload />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default Homepage;
