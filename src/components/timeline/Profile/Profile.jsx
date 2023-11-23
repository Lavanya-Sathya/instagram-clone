import React, { useState } from "react";
import "./Profile.css";
import userProfile from "@/image/img.jpg";
import { useNavigate } from "react-router-dom";
import ProfilePost from "./ProfilePost";
import ProfileReel from "./ProfileReel";

function Profile({ user }) {
  const [isPostSelected, setIsPostSelected] = useState(true);
  const navigate = useNavigate();
  // Logout from the current user session
  const handleLogOut = (e) => {
    e.preventDefault();
    const confirmLogOut = confirm("Are you sure you want to Log Out?");
    if (confirmLogOut) {
      sessionStorage.removeItem("Token");
      navigate("/");
    }
  };
  return (
    <div className="profileContainer">
      {/* User details section */}
      <div className="userDetailsCont">
        <div className="imgUserNameCon">
          <img src={userProfile} alt="profile" className="profileImg" />
          <span className="mobileUserName">{user?.data?.FullName}</span>
        </div>
        <div className="userProfileDiv">
          <div className="userProfileSubDiv1">
            <span className="h4">{user?.data?.username}</span>
            <button className="btnEditView btntoggle">Edit Profile</button>
            <button className="btnEditView btntoggle">View archive</button>
            <i
              className="bi bi-box-arrow-right btntoggle"
              onClick={handleLogOut}
            ></i>
          </div>
          <div className="userProfileSubDiv2">
            <span>
              <strong>0</strong> Posts
            </span>
            <span>
              <strong>0</strong> Followers
            </span>
            <span>
              <strong>0</strong> Following
            </span>
          </div>
          <span className="webUserName">{user?.data?.FullName}</span>
        </div>
      </div>
      <div className="mobileResProfile">
        <button className="btnEditView btntoggle1">Edit Profile</button>
        <button className="btnEditView btntoggle1">View archive</button>
        <i className="bi bi-box-arrow-right" onClick={handleLogOut}></i>{" "}
      </div>

      <div className="userDetailsCont2">
        <div className="ProfileBtnCont">
          <button
            className="ProfilePostsReelsBtn"
            onClick={() => setIsPostSelected(true)}
            style={{ borderTop: isPostSelected ? "1px solid black" : "none" }}
          >
            Posts
          </button>
          {/* false */}
          <button
            className="ProfilePostsReelsBtn"
            onClick={() => setIsPostSelected(false)}
            style={{ borderTop: isPostSelected ? "none" : "1px solid black" }}
          >
            Reels
          </button>
        </div>

        {isPostSelected ? (
          <div>
            <ProfilePost />
          </div>
        ) : (
          <div>
            <ProfileReel />
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
