import React from "react";
import "./Reels.css";
import userProfile from "@/image/img.jpg";
import video1 from "@/image/video/video1.mp4";
import video2 from "@/image/video/video2.mp4";

import ReelVideo from "./ReelVideo";
function Reels() {
  return (
    <div className="reelsMainContainer">
      <div className="reelContainer">
        <div className="reelVideos">
          <ReelVideo
            channel="escapeTime"
            avatarSrc={userProfile}
            song="music name"
            url={video1}
            likes="200"
            shares="20"
          />
          <ReelVideo
            channel="escapeTime"
            avatarSrc={userProfile}
            song="test song"
            url={video2}
            likes="140"
            shares="14"
          />
        </div>
      </div>
    </div>
  );
}

export default Reels;