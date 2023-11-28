import UserTheme from "./UserTheme";
import React, { useState } from "react";

const ThemeProvider = ({ children }) => {
  const [isThemeModeLight, setIsThemeModeLight] = useState(true);

  const toggleTheme = () => {
    setIsThemeModeLight((prevTheme) => !prevTheme);
  };

  return (
    <UserTheme.Provider value={{ isThemeModeLight, toggleTheme }}>
      {children}
    </UserTheme.Provider>
  );
};
export default ThemeProvider;
