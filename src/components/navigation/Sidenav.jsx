import React from "react";
import "./sidenav.css";
import HomeIcon from "../../images/insta_icons/home_light.png";
import SearchIcon from "../../images/insta_icons/search_light.png";
import ExploreIcon from "../../images/insta_icons/explore_light.png";
import ReelsIcon from "../../images/insta_icons/reels_light.png";
import MessageIcon from "../../images/insta_icons/messages_light.png";
import NotificationIcon from "../../images/insta_icons/notification_light.png";
import CreateIcon from "../../images/insta_icons/create_light.png";
import ProfileIcon from "../../images/insta_icons/user_profile.png";
import MoreIcon from "../../images/insta_icons/more_light.png";
import InstagramIcon from "../../images/insta_icons/instagram_icon.png";

function Sidenav() {
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
      <div className="item item-end">
        <img src={MoreIcon} alt="MoreIcon" />
        <p className="text-dark m-0">More</p>
      </div>
    </div>
  );
}

export default Sidenav;
