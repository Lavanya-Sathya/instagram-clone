import React, { useContext, useState } from "react";
import "./sidenav.css";
import { Link } from "react-router-dom";
import UserTheme from "../Home/context/UserTheme";
import NavLinks from "./NavLinks";
function Sidenav() {
  const { isThemeModeLight } = useContext(UserTheme);
  const [moreClick, setMoreClick] = useState(false);
  const ThemeColors = {
    // backgroundColor: isThemeModeLight ? "white" : "black",
    color: isThemeModeLight ? "black" : "white",
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
        <NavLinks icon="bi bi-house" linkName="Home" toLink="/home" />
        {/* Search Option */}
        <NavLinks icon="bi bi-search" linkName="Search" toLink="/home/search" />
        {/* Explore section */}
        <NavLinks
          icon="bi bi-compass"
          linkName="Explore"
          toLink="/home/explore"
        />
        {/* Reels section */}
        <NavLinks
          classes="item itemOrder1"
          icon="bi bi-music-note"
          linkName="Reels"
          toLink="/home/reels"
        />

        {/* Message */}
        <NavLinks
          classes="item item1"
          icon="bi bi-chat"
          linkName="Messages"
          toLink="/home/message"
        />

        {/* Notification */}
        <NavLinks
          classes="item item1"
          icon="bi bi-heart"
          linkName="Notifications"
          toLink="/home/notification"
        />

        {/* Create a new post */}
        <NavLinks
          classes="item itemOrder2"
          icon="bi bi-plus-square"
          linkName="Create"
          toLink="/home/image-upload"
        />

        {/* User profile */}
        <NavLinks
          classes="item itemOrder3"
          icon="bi bi-person-circle"
          linkName="Profile"
          toLink="/home/userprofile"
        />
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
          <NavLinks
            classes="itemM"
            icon="bi bi-gear-wide"
            linkName="Setting"
            toLink=""
          />

          {/* Activity section */}
          <NavLinks
            classes="itemM"
            icon="bi bi-activity"
            linkName="Your Activity"
            toLink=""
          />

          {/* Saved posts */}
          <NavLinks
            classes="itemM"
            icon="bi bi-bookmark"
            linkName="Saved"
            toLink=""
          />

          {/*Background Color change option */}
          <NavLinks
            classes="itemM"
            icon="bi bi-brightness-high"
            linkName="Switch appearance"
            toLink=""
          />
          {/* Report a problem */}
          <NavLinks
            classes="itemM mb-2"
            icon="bi bi-exclamation-octagon"
            linkName=" Report a problem"
            toLink=""
          />

          {/* Switch the account */}
          <NavLinks
            classes="itemM"
            icon=""
            linkName="Switch accounts"
            toLink=""
          />

          {/* Logout */}
          <NavLinks
            classes="itemM border-top"
            icon=""
            linkName="Log out"
            toLink=""
          />
        </div>
      )}
    </div>
  );
}

export default Sidenav;
