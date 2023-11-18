import React from "react";
import "./sugesstion.css";
import userImg from "@/image/insta_icons/user_profile.png";
function Sugesstions() {
  return (
    <div className="sugContainerHome d-flex align-items-center justify-content-between m-1 p-1 mb-3">
      <div className="sugImgName d-flex gap-2 align-items-center">
        <img src={userImg} alt="" />
        <div className="">
          <p className="h6 mb-0 pointer">Username</p>
          <p className="mb-0">Followed by roopa</p>
        </div>
      </div>
      <button className="btnSugFollow">Follow</button>
    </div>
  );
}

export default Sugesstions;
