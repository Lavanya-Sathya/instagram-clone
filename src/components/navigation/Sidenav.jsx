import React, { useState } from "react";
import "./sidenav.css";
import HomeIcon from "@/image/insta_icons/home_light.png";
import SearchIcon from "@/image/insta_icons/search_light.png";
import ExploreIcon from "@/image/insta_icons/explore_light.png";
import ReelsIcon from "@/image/insta_icons/reels_light.png";
import MessageIcon from "@/image/insta_icons/messages_light.png";
import NotificationIcon from "@/image/insta_icons/notification_light.png";
import CreateIcon from "@/image/insta_icons/create_light.png";
import ProfileIcon from "@/image/insta_icons/user_profile.png";
import MoreIcon from "@/image/insta_icons/more_light.png";
import InstagramIcon from "@/image/insta_icons/instagram_icon.png";
import { useNavigate, Link } from "react-router-dom";

function Sidenav({ user }) {
  // console.log("user data: ", user.data.username);
  const navigate = useNavigate();
  const [moreClick, setMoreClick] = useState(false);
  // logout from the current user session
  const handleLogOut = (e) => {
    e.preventDefault();
    const confirmLogOut = confirm("Are you sure you want to Log Out?");
    if (confirmLogOut) {
      sessionStorage.removeItem("Token");
      navigate("/");
    }
  };
  return (
    // Side navbar contains various option to explore
    <div className="sidenav">
      <Link className="headerHome" to="/home">
        <img src={InstagramIcon} alt="InstagramIcon" />
        <p className="h3">Instagram</p>
        {/* Notification */}
        <div className="d-flex gap-4">
          <Link className="itemNotification" to="">
            <img src={NotificationIcon} alt="NotificationIcon" />
          </Link>
          <Link className="itemNotification" to="">
            <img src={MessageIcon} alt="MessageIcon" />
          </Link>
        </div>
      </Link>
      <div className="navbarItems">
        {/* Timeline section */}
        <Link className="item" to="/Home">
          <img src={HomeIcon} alt="home" />
          <p className="text-dark m-0">Home</p>
        </Link>
        {/* Search Option */}
        <Link className="item" to="/home/explore">
          <img src={SearchIcon} alt="SearchIcon" />
          <p className="text-dark m-0">Search</p>
        </Link>
        {/* Explore section */}
        <Link className="item item1" to="/home/explore">
          <img src={ExploreIcon} alt="ExploreIcon" />
          <p className="text-dark m-0">Explore</p>
        </Link>
        {/* Reels section */}
        <Link className="item itemOrder1" to="/home/reels">
          <img src={ReelsIcon} alt="ReelsIcon" />
          <p className="text-dark m-0">Reels</p>
        </Link>
        {/* Message */}
        <Link className="item item1" to="">
          <img src={MessageIcon} alt="MessageIcon" />
          <p className="text-dark m-0">Messages</p>
        </Link>
        {/* Notification */}
        <Link className="item item1" to="">
          <img src={NotificationIcon} alt="NotificationIcon" />
          <p className="text-dark m-0">Notifications</p>
        </Link>
        {/* Create a new post */}
        <Link className="item itemOrder2" to="/home/image-upload">
          <img src={CreateIcon} alt="CreateIcon" />
          <p className="text-dark m-0">Create</p>
        </Link>
        {/* User profile */}
        <Link className="item itemOrder3" to="/home/userprofile">
          <img src={ProfileIcon} alt="ProfileIcon" />
          <p className="text-dark m-0">{user?.data?.username}</p>
        </Link>
      </div>
      {/* More option onclick gives the other options to explore */}
      <div className="item item-end" onClick={() => setMoreClick(!moreClick)}>
        <img src={MoreIcon} alt="MoreIcon" />
        <p className="text-dark m-0">More</p>
      </div>
      {moreClick && (
        <div className="moreComp">
          {/* Settings */}
          <Link className="itemM" to="">
            <i class="bi bi-gear-wide"></i>
            <span className="text-dark m-0">Setting</span>
          </Link>
          {/* Activity section */}
          <Link className="itemM" to="">
            <i class="bi bi-activity"></i>
            <span className="text-dark m-0">Your Activity</span>
          </Link>
          {/* Saved posts */}
          <Link className="itemM" to="">
            <i className="bi bi-bookmark"></i>
            <span className="text-dark m-0">Saved</span>
          </Link>
          {/*Background Color change option */}
          <Link className="itemM" to="">
            <i class="bi bi-brightness-high"></i>
            <span className="text-dark m-0">Switch appearance</span>
          </Link>
          {/* Report a problem */}
          <Link className="itemM mb-2" to="">
            <i class="bi bi-exclamation-octagon"></i>
            <span className="text-dark m-0">Report a problem</span>
          </Link>
          {/* Switch the account */}
          <Link className="itemM" to="">
            <span className="text-dark m-0">Switch accounts</span>
          </Link>
          {/* Logout */}
          <Link className="item border-top" to="" onClick={handleLogOut}>
            <span className="text-dark m-0">Log out</span>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Sidenav;
