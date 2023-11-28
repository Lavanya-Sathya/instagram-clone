import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";
import { useNavigate } from "react-router-dom";
import { db } from "../../Firebase/Firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
const UserContextProvider = ({ children }) => {
  const navigate = useNavigate();
  // To store current user information
  const [user, setUser] = useState(null);
  const userId = JSON.parse(sessionStorage.getItem("Token"));
  useEffect(() => {
    // Fetch the current user data from the firebase
    const fetchUserData = async () => {
      try {
        const snapshot = await onSnapshot(
          query(collection(db, "users"), where("uid", "==", userId)),
          (querySnapshot) => {
            // const postsArray = [];
            querySnapshot.forEach((doc) => {
              //   console.log(doc.id, " => ", doc.data());
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
  // logout from the current user session
  const handleLogOut = (e) => {
    e.preventDefault();
    const confirmLogOut = confirm("Are you sure you want to Log Out?");
    if (confirmLogOut) {
      sessionStorage.removeItem("Token");
      localStorage.removeItem("theme");
      navigate("/");
    }
  };
  // Logout from the current user session
  const handleSwitch = (e) => {
    e.preventDefault();
    const confirmLogOut = confirm("Are you sure you want to Switch?");
    if (confirmLogOut) {
      sessionStorage.removeItem("Token");
      localStorage.removeItem("theme");
      navigate("/");
    }
  };
  return (
    <UserContext.Provider value={{ user, setUser, handleLogOut, handleSwitch }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
