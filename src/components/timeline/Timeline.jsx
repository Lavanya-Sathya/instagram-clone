import React from "react";
import "./timeline.css";
import Sugesstions from "./Sugesstions";
import Post from "./post/Post";
function Timeline() {
  return (
    <div className="timeline">
      <div className="timelineLeft mt-1">
        <div className="postTimeline mb-5">
          <Post />
          <Post />
          <Post />
        </div>
      </div>
      <div className="timelineRight">
        <Sugesstions />
      </div>
    </div>
  );
}

export default Timeline;
