import UserTheme from "./UserTheme";
import React, { useState, useEffect } from "react";

const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem("theme");
  const initialTheme = storedTheme ? storedTheme === "true" : true;
  const [isThemeModeLight, setIsThemeModeLight] = useState(initialTheme);

  const toggleTheme = () => {
    setIsThemeModeLight((prevTheme) => !prevTheme);
  };
  useEffect(() => {
    localStorage.setItem("theme", isThemeModeLight.toString());
  }, [isThemeModeLight]);
  return (
    <UserTheme.Provider value={{ isThemeModeLight, toggleTheme }}>
      {children}
    </UserTheme.Provider>
  );
};
export default ThemeProvider;
