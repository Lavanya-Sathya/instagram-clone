import React, { useState } from "react";
import "./post.css";
import userIcon from "@/image/insta_icons/user_profile.png";
function Post({ user, postImage, likes, timestamp, caption }) {
  const [colorHeart, setcolorHeart] = useState(false);
  const [savePost, setsavePost] = useState(false);
  const [addComment, setAddComment] = useState(false);
  const handleHeart = (e) => {
    !colorHeart
      ? ((e.target.style.color = "red"),
        (e.target.className = "bi bi-heart-fill"))
      : ((e.target.className = "bi bi-heart"),
        (e.target.style.color = "black"));
    setcolorHeart(!colorHeart);
  };
  const handleSavePost = (e) => {
    !savePost
      ? (e.target.className = "bi bi-bookmark-fill")
      : (e.target.className = "bi bi-bookmark");
    setsavePost(!savePost);
  };
  const handleAddComment = (e) => {
    setAddComment(!!e.target.trim());
  };
  return (
    <div className="post mb-2 pb-3 border-bottom">
      <div className="postHeader d-flex justify-content-between align-items-center mb-1 p-2">
        <div className="postHeaderAuthor d-flex gap-2 align-items-center">
          <img
            src={userIcon}
            alt="Icon"
            style={{ width: "3rem", height: "3rem" }}
          />
          <p className="h6 username mb-0">{user} </p>
          <span className="spanHeader">• {timestamp}</span>
        </div>
        <span className="h4">
          <i className="bi bi-three-dots"></i>
        </span>
      </div>
      <div className="postImage">
        <img src={postImage} alt="" className="w-100" />
      </div>
      <div className="postFooter ">
        <div className="postFooterIconsContainer h4 d-flex justify-content-between p-2">
          <div className="postFooterIcons d-flex gap-2">
            <i className="bi bi-heart" onClick={(e) => handleHeart(e)}></i>
            <i className="bi bi-chat"></i>
            <i className="bi bi-send"></i>
          </div>
          <i className="bi bi-bookmark" onClick={(e) => handleSavePost(e)}></i>
        </div>
        <div className="postLikeUser" style={{ paddingLeft: "0.3rem" }}>
          <p className="mb-0 h6">{likes} likes</p>
          <div className="caption">
            <span className=" pt-1" style={{ fontWeight: 600 }}>
              {user}{" "}
            </span>
            <span className="pt-1" style={{ fontSize: "0.9rem" }}>
              {caption}
            </span>
          </div>
        </div>
        <div className="postComment d-flex align-items-center justify-content-between">
          <textarea
            name="comment"
            id="comment"
            cols="48"
            rows="1"
            className="postAddComment"
            placeholder="Add a comment..."
            onChange={(e) => handleAddComment(e)}
          ></textarea>
          <div className="d-flex align-items-center">
            <button
              className="btnCommentPost"
              style={{ display: addComment ? "block" : "none" }}
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
