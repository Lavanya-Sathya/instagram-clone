import React, { useContext, useEffect, useState } from "react";
import "./sugesstion.css";
import { Link } from "react-router-dom";
import userImg from "@/image/img.jpg";
import UserContext from "../Home/context/UserContext";
import UserTheme from "../Home/context/UserTheme";
import { db } from "../Firebase/Firebase";
import {
  collection,
  onSnapshot,
  query,
  where,
  limit,
} from "firebase/firestore";
function Sugesstions() {
  const { isThemeModeLight } = useContext(UserTheme);
  const { user, handleSwitch } = useContext(UserContext);
  const [suggestion, setSuggestion] = useState(null);
  useEffect(() => {
    // Fetch the current user data from the firebase
    const userId = JSON.parse(sessionStorage.getItem("Token"));
    const fetchUserDetails = async () => {
      try {
        const snapshot = await onSnapshot(
          query(collection(db, "users"), where("uid", "!=", userId), limit(5)),
          (querySnapshot) => {
            const suggestionsArray = [];
            querySnapshot.forEach((doc) => {
              console.log(doc.id, " => ", doc.data());
              suggestionsArray.push({ id: doc.id, data: doc.data() });
            });
            setSuggestion(suggestionsArray);
            console.log("suggestion: ", typeof suggestion);
          }
        );
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserDetails();
  }, []);
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
        <button
          className="btnSugFollow"
          style={{ backgroundColor: isThemeModeLight ? "white" : "#333" }}
          onClick={(e) => handleSwitch(e)}
        >
          Switch
        </button>
      </div>
      <div className="sugesstionTime d-flex align-items-center justify-content-between p-2 mb-3">
        <p className="h6 mb-0">Suggested for you</p>
        <Link to="" className="text-decoration-none">
          See All
        </Link>
      </div>
      <div className="sugContainerHome d-flex flex-column gap-3">
        {suggestion ? (
          suggestion.map((suggestUser, idx) => (
            <div className=" d-flex justify-content-between" key={idx}>
              <div className="sugImgName d-flex gap-2" key={suggestUser.id}>
                <img src={userImg} alt="" />
                <div className="">
                  <p className="h6 mb-0 pointer">{suggestUser.data.username}</p>
                  <p className="mb-0">Followed by abc</p>
                </div>
              </div>
              <button
                className="btnSugFollow"
                style={{
                  backgroundColor: isThemeModeLight ? "white" : "#333",
                }}
              >
                Follow
              </button>
            </div>
          ))
        ) : (
          <div className="m-2">No suggested Users</div>
        )}
      </div>
      <p className="m-2 mt-4" style={{ color: "#e0e0e0" }}>
        &copy; InstaClone
      </p>
    </>
  );
}

export default Sugesstions;
