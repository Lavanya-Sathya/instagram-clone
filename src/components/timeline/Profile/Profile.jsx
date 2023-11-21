import React from "react";
import "./Profile.css";
import userProfile from "@/image/img.jpg";
function Profile({ user }) {
  return (
    <div className="profileContainer">
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
            <i class="bi bi-gear-wide btntoggle"></i>
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
        <i class="bi bi-gear-wide "></i>
      </div>
      <div className="userDetailsCont2"></div>
    </div>
  );
}

export default Profile;
