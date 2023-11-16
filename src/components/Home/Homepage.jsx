import React from "react";
import "./Homepage.css";
import Sidenav from "../navigation/Sidenav";
import Timeline from "../timeline/Timeline";
function Homepage() {
  return (
    <div className="homepage">
      <div className="homepageNav">
        <Sidenav />
      </div>
      <div className="homepageTimeline">
        <Timeline />
      </div>
    </div>
  );
}

export default Homepage;
