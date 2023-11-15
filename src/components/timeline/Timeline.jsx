import React from "react";
import "./timeline.css";
import Sugesstions from "./Sugesstions";
function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline__left">Timeline</div>
      <div className="timeline__right">
        <Sugesstions />
      </div>
    </div>
  );
}

export default Timeline;
