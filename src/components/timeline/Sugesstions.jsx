import React, { useContext } from "react";
import "./sugesstion.css";
import { useNavigate, Link } from "react-router-dom";
import userImg from "@/image/img.jpg";
import UserContext from "../Home/context/UserContext";
function Sugesstions() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  // Logout from the current user session
  const handleLogOut = (e) => {
    e.preventDefault();
    const confirmLogOut = confirm("Are you sure you want to Switch?");
    if (confirmLogOut) {
      sessionStorage.removeItem("Token");
      navigate("/");
    }
  };
  return (
    <>
      <div className="sugContainerHome d-flex align-items-center justify-content-between m-1 p-1 mb-3">
        <div className="sugImgName d-flex gap-2 align-items-center">
          <img src={userImg} alt="" />
          <div className="">
            <p className="h6 mb-0 pointer"></p>
            {user?.data?.username}
          </div>
        </div>
        <button className="btnSugFollow" onClick={handleLogOut}>
          Switch
        </button>
      </div>
      <div className="sugesstionTime d-flex align-items-center justify-content-between p-2 mb-3">
        <p className="h6 mb-0">Suggested for you</p>
        <Link to="" className="text-decoration-none">
          See All
        </Link>
      </div>
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
    </>
  );
}

export default Sugesstions;
