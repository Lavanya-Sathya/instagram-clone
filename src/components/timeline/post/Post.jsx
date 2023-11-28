import React, { useState, useEffect, useRef, useContext } from "react";
import { db } from "../../Firebase/Firebase";
import "./post.css";
import UserTheme from "../../Home/context/UserTheme";
function Post({ user, postImage, likes, timestamp, caption, type }) {
  const { isThemeModeLight } = useContext(UserTheme);
  const [colorHeart, setcolorHeart] = useState(false);
  const [savePost, setsavePost] = useState(false);
  const [addComment, setAddComment] = useState(false);
  const [comment, setComment] = useState("");
  const [timeElapsed, setTimeElapsed] = useState(0);
  // To show video in the timeline
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

  // Timestamp format and updated once when the page is refreshed
  useEffect(() => {
    const now = new Date();
    const timestampDate = timestamp.toDate();
    const timeDifference = Math.floor(now - timestampDate);
    const seconds = Math.floor(timeDifference / 1000);
    // const minutes = Math.floor(seconds / 60);
    // const hours = Math.floor(minutes / 60);
    // const days = Math.floor(hours / 24);
    // console.log("Time Elapsed: ", {
    //   seconds,
    //   minutes,
    //   hours,
    //   days,
    // });
    setTimeElapsed(seconds);
  }, []);
  const formatTime = () => {
    if (timeElapsed < 60) {
      return `${timeElapsed}s`;
    } else if (timeElapsed < 3600) {
      const minutes = Math.floor(timeElapsed / 60);
      return `${minutes}m`;
    } else if (timeElapsed < 86400) {
      const hours = Math.floor(timeElapsed / 3600);
      return `${hours}h`;
    } else {
      const days = Math.floor(timeElapsed / 86400);
      return `${days}d`;
    }
  };
  const handleHeart = (e) => {
    !colorHeart
      ? ((e.target.style.color = "red"),
        (e.target.className = "bi bi-heart-fill"))
      : ((e.target.className = "bi bi-heart"),
        (e.target.style.color = isThemeModeLight ? "black" : "white"));
    setcolorHeart(!colorHeart);
  };
  const handleSavePost = (e) => {
    !savePost
      ? (e.target.className = "bi bi-bookmark-fill")
      : (e.target.className = "bi bi-bookmark");
    setsavePost(!savePost);
  };
  const handleAddComment = (e) => {
    setAddComment(!!e.target);
    setComment(e.target.value);
  };
  return (
    <div className="post mb-2 pb-3 border-bottom">
      <div className="postHeader d-flex justify-content-between align-items-center mb-1 p-2">
        <div className="postHeaderAuthor d-flex gap-2 align-items-center">
          {/* <img
            src={userIcon}
            alt="Icon"
            style={{ width: "3rem", height: "3rem" }}
          /> */}
          <i className="bi bi-person-circle"></i>
          <p className="h6 username mb-0">{user} </p>
          <span className="spanHeader">• {formatTime()}</span>
        </div>
        <span className="h4">
          <i className="bi bi-three-dots"></i>
        </span>
      </div>
      {type == "image" ? (
        <div className="postImage">
          <img src={postImage} alt="image" className="w-100" />
        </div>
      ) : (
        <div className="postVideo">
          <i
            className="bi bi-play-fill playBtn"
            style={{ display: isVideoPlaying ? "none" : "block" }}
            onClick={onVideoPress}
          ></i>
          <video
            src={postImage}
            ref={videoRef}
            onClick={onVideoPress}
            alt="video"
            className="w-100"
            loop={true}
          />
        </div>
      )}
      <div className="postFooter ">
        <div className="postFooterIconsContainer h4 d-flex justify-content-between p-2">
          <div className="postFooterIcons d-flex gap-2">
            <i
              className="bi bi-heart"
              style={{ color: isThemeModeLight ? "black" : "white" }}
              onClick={(e) => handleHeart(e)}
            ></i>
            <i className="bi bi-chat"></i>
            <i className="bi bi-send"></i>
          </div>
          <i className="bi bi-bookmark" onClick={(e) => handleSavePost(e)}></i>
        </div>
        <div className="postLikeUser" style={{ paddingLeft: "0.6rem" }}>
          <p className="mb-0 h6">
            {likes} {likes ? "likes" : ""}
          </p>
          <div className="caption">
            <span className=" pt-1">
              <strong>{user}</strong>{" "}
            </span>
            <span className="pt-1" style={{ fontSize: "0.9rem" }}>
              {caption}
            </span>
          </div>
        </div>
        <div
          className="postComment d-flex align-items-center justify-content-between"
          style={{ paddingLeft: "0.6rem" }}
        >
          <textarea
            name="comment"
            id="comment"
            cols="48"
            rows="1"
            className="postAddComment"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => handleAddComment(e)}
            style={{
              backgroundColor: isThemeModeLight ? "white" : "black",
              color: isThemeModeLight ? "black" : "white",
            }}
          ></textarea>
          <div className="d-flex align-items-center">
            <button
              className="btnCommentPost"
              style={{
                display: addComment ? "block" : "none",
                backgroundColor: isThemeModeLight ? "white" : "black",
              }}
            >
              Post
            </button>
            <i className="bi bi-emoji-smile"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
