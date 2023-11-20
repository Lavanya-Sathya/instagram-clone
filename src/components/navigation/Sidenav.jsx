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
import { useNavigate } from "react-router-dom";

function Sidenav() {
  const navigate = useNavigate();
  const [moreClick, setMoreClick] = useState(false);
  const handleLogOut = (e) => {
    e.preventDefault();
    const confirmLogOut = confirm("Are you sure you want to Log Out?");
    if (confirmLogOut) {
      sessionStorage.removeItem("user");
      navigate("/");
    }
  };
  return (
    <div className="sidenav">
      <a className="headerHome" href="/Home">
        <img src={InstagramIcon} alt="InstagramIcon" />
        <p className="h3">Instagram</p>
        <div className="d-flex gap-4">
          <a className="itemNotification" href="">
            <img src={NotificationIcon} alt="NotificationIcon" />
          </a>
          <a className="itemNotification" href="">
            <img src={MessageIcon} alt="MessageIcon" />
          </a>
        </div>
      </a>
      <div className="navbarItems">
        <a className="item" href="">
          <img src={HomeIcon} alt="home" />
          <p className="text-dark m-0">Home</p>
        </a>
        <a className="item" href="">
          <img src={SearchIcon} alt="SearchIcon" />
          <p className="text-dark m-0">Search</p>
        </a>
        <a className="item item1" href="">
          <img src={ExploreIcon} alt="ExploreIcon" />
          <p className="text-dark m-0">Explore</p>
        </a>
        <a className="item itemOrder1" href="">
          <img src={ReelsIcon} alt="ReelsIcon" />
          <p className="text-dark m-0">Reels</p>
        </a>
        <a className="item item1" href="">
          <img src={MessageIcon} alt="MessageIcon" />
          <p className="text-dark m-0">Messages</p>
        </a>
        <a className="item item1" href="">
          <img src={NotificationIcon} alt="NotificationIcon" />
          <p className="text-dark m-0">Notifications</p>
        </a>
        <a className="item itemOrder2" href="">
          <img src={CreateIcon} alt="CreateIcon" />
          <p className="text-dark m-0">Create</p>
        </a>
        <a className="item itemOrder3" href="">
          <img src={ProfileIcon} alt="ProfileIcon" />
          <p className="text-dark m-0">Profile</p>
        </a>
      </div>
      <div className="item item-end" onClick={() => setMoreClick(!moreClick)}>
        <img src={MoreIcon} alt="MoreIcon" />
        <p className="text-dark m-0">More</p>
      </div>
      {moreClick && (
        <div className="moreComp">
          <a className="itemM" href="">
            <i class="bi bi-gear-wide"></i>
            <span className="text-dark m-0">Setting</span>
          </a>
          <a className="itemM" href="">
            <i class="bi bi-activity"></i>
            <span className="text-dark m-0">Your Activity</span>
          </a>
          <a className="itemM" href="">
            <i className="bi bi-bookmark"></i>
            <span className="text-dark m-0">Saved</span>
          </a>
          <a className="itemM" href="">
            <i class="bi bi-brightness-high"></i>
            <span className="text-dark m-0">Switch appearance</span>
          </a>
          <a className="itemM mb-2" href="">
            <i class="bi bi-exclamation-octagon"></i>
            <span className="text-dark m-0">Report a problem</span>
          </a>
          <p className="divisionMore"></p>
          <a className="itemM" href="">
            <i class="bi bi-at"></i>
            <span className="text-dark m-0">Threads</span>
          </a>
          <p className="divisionMore"></p>

          <a className="itemM" href="">
            <span className="text-dark m-0">Switch accounts</span>
          </a>
          <a className="item border-top" href="" onClick={handleLogOut}>
            <span className="text-dark m-0">Log out</span>
          </a>
        </div>
      )}
    </div>
  );
}

export default Sidenav;
