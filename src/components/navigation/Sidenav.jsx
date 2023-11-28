import React, { useContext, useState } from "react";
import "./sidenav.css";
import { useNavigate, Link } from "react-router-dom";
import UserTheme from "../Home/context/UserTheme";
function Sidenav() {
  const { isThemeModeLight, toggleTheme } = useContext(UserTheme);
  const navigate = useNavigate();
  const [moreClick, setMoreClick] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  // logout from the current user session
  const handleLogOut = (e) => {
    e.preventDefault();
    const confirmLogOut = confirm("Are you sure you want to Log Out?");
    if (confirmLogOut) {
      setMoreClick(!moreClick);
      sessionStorage.removeItem("Token");
      navigate("/");
    }
  };
  // Toggle Theme Color
  const handleTheme = (e) => {
    e.preventDefault();
    toggleTheme();
    setMoreClick(!moreClick);
  };
  const ThemeColors = {
    // backgroundColor: isThemeModeLight ? "white" : "black",
    color: isThemeModeLight ? "black" : "white",
  };
  const dynamicStyles = {
    backgroundColor: isHovered && isThemeModeLight ? "#e0e0e0" : "white",
  };
  return (
    // Side navbar contains various option to explore
    <div className="sidenav">
      <Link
        className="headerHome"
        to="/home"
        style={{
          borderBottom:
            window.innerWidth <= 780
              ? isThemeModeLight
                ? "0.2px solid #e0e0e0"
                : "0.2px solid white"
              : "initial",
          backgroundColor:
            window.innerWidth <= 780
              ? isThemeModeLight
                ? "white"
                : "black"
              : isThemeModeLight
              ? "white"
              : "black",
          color: isThemeModeLight ? "black" : "white",
        }}
      >
        <i className="bi bi-instagram" style={ThemeColors}></i>
        <p className="h3">InstaClone</p>
        {/* Notification */}
        <div className="d-flex gap-4">
          <Link className="itemNotification" to="/home/notification">
            <i className="bi bi-heart" style={ThemeColors}></i>
          </Link>
          <Link className="itemNotification" to="/home/message">
            <i className="bi bi-chat" style={ThemeColors}></i>
          </Link>
        </div>
      </Link>
      <div
        className="navbarItems"
        style={{
          backgroundColor:
            window.innerWidth <= 780
              ? isThemeModeLight
                ? "white"
                : "black"
              : "initial",
          borderTop:
            window.innerWidth <= 780
              ? isThemeModeLight
                ? "0.2px solid #e0e0e0"
                : "0.2px solid white"
              : "initial",
        }}
      >
        {/* Timeline section */}
        <Link
          className="item"
          to="/Home"
          // style={dynamicStyles}
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
        >
          <i className="bi bi-house" style={ThemeColors}></i>
          <p className="m-0" style={ThemeColors}>
            Home
          </p>
        </Link>
        {/* Search Option */}
        <Link className="item" to="/home/search">
          <i className="bi bi-search" style={ThemeColors}></i>
          <p className="m-0" style={ThemeColors}>
            Search
          </p>
        </Link>
        {/* Explore section */}
        <Link className="item" to="/home/explore">
          <i className="bi bi-compass" style={ThemeColors}></i>
          <p className="m-0" style={ThemeColors}>
            Explore
          </p>
        </Link>
        {/* Reels section */}
        <Link className="item itemOrder1" to="/home/reels">
          <i className="bi bi-music-note" style={ThemeColors}></i>
          <p className="m-0" style={ThemeColors}>
            Reels
          </p>
        </Link>
        {/* Message */}
        <Link className="item item1" to="/home/message">
          <i className="bi bi-chat" style={ThemeColors}></i>
          <p className=" m-0" style={ThemeColors}>
            Messages
          </p>
        </Link>
        {/* Notification */}
        <Link className="item item1" to="/home/notification">
          <i className="bi bi-heart" style={ThemeColors}></i>
          <p className=" m-0" style={ThemeColors}>
            Notifications
          </p>
        </Link>
        {/* Create a new post */}
        <Link className="item itemOrder2" to="/home/image-upload">
          <i className="bi bi-plus-square" style={ThemeColors}></i>
          <p className=" m-0" style={ThemeColors}>
            Create
          </p>
        </Link>
        {/* User profile */}
        <Link className="item itemOrder3" to="/home/userprofile">
          <i className="bi bi-person-circle" style={ThemeColors}></i>
          <p className=" m-0" style={ThemeColors}>
            Profile
          </p>
        </Link>
      </div>
      {/* More option onclick gives the other options to explore */}
      <div className="item item-end" onClick={() => setMoreClick(!moreClick)}>
        <i className="bi bi-list" style={ThemeColors}></i>
        <p className=" m-0" style={ThemeColors}>
          More
        </p>
      </div>
      {moreClick && (
        <div
          className="moreComp"
          style={{
            backgroundColor: isThemeModeLight ? "#e0e0e0" : "rgb(70, 66, 66)",
            color: isThemeModeLight ? "black" : "white",
          }}
        >
          {/* Settings */}
          <Link className="itemM" to="">
            <i className="bi bi-gear-wide" style={ThemeColors}></i>
            <span className=" m-0" style={ThemeColors}>
              Setting
            </span>
          </Link>
          {/* Activity section */}
          <Link className="itemM" to="">
            <i className="bi bi-activity" style={ThemeColors}></i>
            <span className=" m-0" style={ThemeColors}>
              Your Activity
            </span>
          </Link>
          {/* Saved posts */}
          <Link className="itemM" to="">
            <i className="bi bi-bookmark" style={ThemeColors}></i>
            <span className=" m-0" style={ThemeColors}>
              Saved
            </span>
          </Link>
          {/*Background Color change option */}
          <Link className="itemM" onClick={(e) => handleTheme(e)}>
            <i className="bi bi-brightness-high" style={ThemeColors}></i>
            <span className=" m-0" style={ThemeColors}>
              Switch appearance
            </span>
          </Link>
          {/* Report a problem */}
          <Link className="itemM mb-2" to="">
            <i className="bi bi-exclamation-octagon" style={ThemeColors}></i>
            <span className=" m-0" style={ThemeColors}>
              Report a problem
            </span>
          </Link>
          {/* Switch the account */}
          <Link className="itemM" to="">
            <span className=" m-0" style={ThemeColors}>
              Switch accounts
            </span>
          </Link>
          {/* Logout */}
          <Link className="itemM border-top" to="" onClick={handleLogOut}>
            <span className=" m-0" style={ThemeColors}>
              Log out
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Sidenav;
