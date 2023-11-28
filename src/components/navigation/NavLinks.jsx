import React, { useState, useContext } from "react";
import "./sidenav.css";
import { Link } from "react-router-dom";
import UserTheme from "../Home/context/UserTheme";
import UserContext from "../Home/context/UserContext";

function NavLinks({ icon, linkName, toLink, classes = "item" }) {
  const { isThemeModeLight, toggleTheme } = useContext(UserTheme);
  const { handleLogOut, handleSwitch } = useContext(UserContext);
  // handle mouse hover Effect
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const ThemeColors = {
    // backgroundColor: isThemeModeLight ? "white" : "black",
    color: isThemeModeLight ? "black" : "white",
  };
  // handle mouse hover color effects
  const dynamicStyles = {
    borderRadius: isHovered ? "4px" : "0px",
    backgroundColor: isHovered
      ? isThemeModeLight
        ? "#d1cfcb"
        : "#61605d"
      : ThemeColors.backgroundColor,
    color: isHovered
      ? isThemeModeLight
        ? "black"
        : "white"
      : ThemeColors.color,
  };
  // Toggle Theme Color
  const handleTheme = (e) => {
    e.preventDefault();
    toggleTheme();
  };
  return (
    <Link
      className={classes}
      to={toLink}
      onClick={(e) => {
        if (linkName === "Switch appearance") {
          handleTheme(e);
        } else if (linkName === "Log out") {
          handleLogOut(e);
        } else if (linkName === "Switch accounts") {
          handleSwitch(e);
        }
      }}
      style={dynamicStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <i className={icon} style={dynamicStyles}></i>
      <p className="m-0" style={dynamicStyles}>
        {linkName}
      </p>
    </Link>
  );
}

export default NavLinks;
