import UserTheme from "./UserTheme";
import React, { useState, useEffect } from "react";

const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem("theme");
  const initialTheme = storedTheme ? storedTheme === "true" : true;
  const [isThemeModeLight, setIsThemeModeLight] = useState(initialTheme);
  const [moreClick, setMoreClick] = useState(false);
  const toggleTheme = () => {
    setIsThemeModeLight((prevTheme) => !prevTheme);
  };
  const handleMore = () => {
    setMoreClick((prevTheme) => !prevTheme);
  };
  const moreFalse = () => {
    setMoreClick(false);
  };
  useEffect(() => {
    localStorage.setItem("theme", isThemeModeLight.toString());
  }, [isThemeModeLight]);
  return (
    <UserTheme.Provider
      value={{
        isThemeModeLight,
        toggleTheme,
        moreClick,
        handleMore,
        moreFalse,
      }}
    >
      {children}
    </UserTheme.Provider>
  );
};
export default ThemeProvider;
