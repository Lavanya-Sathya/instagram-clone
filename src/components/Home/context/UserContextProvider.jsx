import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";
import { db } from "../../Firebase/Firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // Fetch the current user data from the firebase
    const fetchUserData = async () => {
      const userId = JSON.parse(sessionStorage.getItem("Token"));
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
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
