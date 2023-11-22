import React, { useRef, useState } from "react";
import "./ReelVideo.css";
function ReelVideo({ url, likes, shares, channel, song, avatarSrc }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  const onVideoPress = () => {
    if (isVideoPlaying) {
      // pause video
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      // play video
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };
  return (
    <div className="videoCard">
      <div className="videoHeader">
        <i class="bi bi-arrow-left" style={{ color: "white" }}></i>
        <span>Reels</span>
        <i class="bi bi-camera" style={{ color: "white" }}></i>
      </div>
      <i
        className="bi bi-play-fill playBtn"
        style={{ display: isVideoPlaying ? "none" : "block" }}
        ref={videoRef}
        onClick={onVideoPress}
      ></i>
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="videoPlayer"
        src={url}
        alt="IG reel video"
        loop={true}
      ></video>
      <div className="videoFooter">
        <div className="videoFooterText">
          <img src={avatarSrc} alt="Avatar" />
          <h5>{channel}</h5>
          <button>Follow</button>
        </div>
        <div className="videoIcons">
          <span className="d-flex flex-column">
            <i className="bi bi-heart" onClick={(e) => handleHeart(e)}></i>
            <span className="MobileWhite">{likes}</span>
          </span>
          <span className="d-flex flex-column">
            <i className="bi bi-chat"></i>
            <span className="MobileWhite">{shares}</span>
          </span>
          <i className="bi bi-send"></i>
          <i className="bi bi-bookmark" onClick={(e) => handleSavePost(e)}></i>
        </div>
      </div>
    </div>
  );
}

export default ReelVideo;