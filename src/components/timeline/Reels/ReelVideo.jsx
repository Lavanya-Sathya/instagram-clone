import React, { useRef, useState, useEffect } from "react";
import "./ReelVideo.css";
function ReelVideo({
  url,
  likes,
  comments,
  caption,
  channel,
  song,
  avatarSrc,
}) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  // useEffect(() => {
  //   // Start autoplay when the component mounts
  //   videoRef.current.play();
  //   setIsVideoPlaying(true);

  //   // Pause video when component unmounts
  //   return () => {
  //     videoRef.current.pause();
  //   };
  // }, []);
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
        <i
          className={!isVideoPlaying ? "bi bi-volume-mute" : "bi bi-volume-up"}
          style={{ color: "white" }}
        ></i>
      </div>
      <i
        className="bi bi-play-fill playBtn"
        style={{ display: isVideoPlaying ? "none" : "block" }}
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
        <p className="captionReel text-white">{caption}</p>
        <div className="videoIcons">
          <span className="d-flex flex-column">
            <i
              className="bi bi-heart MobileReelTextColor"
              onClick={(e) => handleHeart(e)}
            ></i>
            <span className="MobileReelTextColor">{likes}</span>
          </span>
          <span className="d-flex flex-column">
            <i className="bi bi-chat MobileReelTextColor"></i>
            <span className="MobileReelTextColor">{comments}</span>
          </span>
          <i className="bi bi-send MobileReelTextColor"></i>
          <i
            className="bi bi-bookmark MobileReelTextColor"
            onClick={(e) => handleSavePost(e)}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default ReelVideo;
