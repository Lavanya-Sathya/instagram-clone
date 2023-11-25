import React from "react";
import "./LoginFooter.css";
import { Link } from "react-router-dom";
function LoginFooter() {
  return (
    <div className="loginFooter m-3">
      <div
        className="footerLinks pt-4 d-flex
      gap-3 justify-content-center flex-wrap"
      >
        <Link to="">Meta</Link>
        <Link to="">About</Link>
        <Link to="">Blog</Link>
        <Link to="">Jobs</Link>
        <Link to="">Help</Link>
        <Link to="">API</Link>
        <Link to="">Privacy</Link>
        <Link to="">Terms</Link>
        <Link to="">Locations</Link>
        <Link to="">Instagram Lite</Link>
        <Link to="">Threads</Link>
        <Link to="">Contact uploading and non-usera</Link>
        <Link to="">Meta Verified</Link>
      </div>
      <div className="FooterCopy mt-3 text-center">
        © 2023 InstaClone from Lavanya 
      </div>
    </div>
  );
}

export default LoginFooter;
