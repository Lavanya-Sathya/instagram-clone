import React, { useState, useContext } from "react";
import "./Profile.css";
import userProfile from "@/image/img.jpg";
import ProfilePost from "./ProfilePost";
import ProfileReel from "./ProfileReel";
import UserContext from "../../Home/context/UserContext";
import UserTheme from "../../Home/context/UserTheme";
function Profile() {
  const { isThemeModeLight, toggleTheme } = useContext(UserTheme);
  const { user, handleLogOut } = useContext(UserContext);

  const [isPostSelected, setIsPostSelected] = useState(true);

  // Toggle Theme Color
  const handleTheme = (e) => {
    toggleTheme();
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
            <button
              className="btnEditView btntoggle"
              onClick={(e) => handleTheme(e)}
            >
              Switch Appearance
            </button>
            <i
              className="bi bi-box-arrow-right btntoggle"
              onClick={(e) => handleLogOut(e)}
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
        <button
          className="btnEditView btntoggle1"
          onClick={(e) => handleTheme(e)}
        >
          Switch Appearance
        </button>
        <i
          className="bi bi-box-arrow-right"
          onClick={(e) => handleLogOut(e)}
        ></i>
      </div>

      <div className="userDetailsCont2">
        <div className="ProfileBtnCont">
          <button
            className="ProfilePostsReelsBtn"
            onClick={() => setIsPostSelected(true)}
            style={{
              borderTop: isPostSelected
                ? isThemeModeLight
                  ? "3px solid rgb(68, 66, 66)"
                  : "3px solid #e0e0e0"
                : "none",
              backgroundColor: isThemeModeLight ? "white" : "#333",
              color: isThemeModeLight ? "#333" : "white",
            }}
          >
            Posts
          </button>
          {/* false */}
          <button
            className="ProfilePostsReelsBtn"
            onClick={() => setIsPostSelected(false)}
            style={{
              borderTop: isPostSelected
                ? "none"
                  ? isThemeModeLight
                  : "3px solid rgb(68, 66, 66)"
                : "3px solid #e0e0e0",
              backgroundColor: isThemeModeLight ? "white" : "#333",
              color: isThemeModeLight ? "#333" : "white",
            }}
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
