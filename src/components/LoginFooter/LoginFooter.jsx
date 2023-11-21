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
        <Link to="https://about.meta.com/" target="_blank">
          Meta
        </Link>
        <Link to="https://about.instagram.com/" target="_blank">
          About
        </Link>
        <Link to="https://about.instagram.com/en_US/blog" target="_blank">
          Blog
        </Link>
        <Link to="https://about.instagram.com/about-us/careers" target="_blank">
          Jobs
        </Link>
        <Link to="https://help.instagram.com/" target="_blank">
          Help
        </Link>
        <Link
          to="https://developers.facebook.com/docs/instagram"
          target="_blank"
        >
          API
        </Link>
        <Link
          to="https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect"
          target="_blank"
        >
          Privacy
        </Link>
        <Link to="https://help.instagram.com/581066165581870/" target="_blank">
          Terms
        </Link>
        <Link to="https://www.instagram.com/explore/locations/" target="_blank">
          Locations
        </Link>
        <Link to="https://www.instagram.com/web/lite/" target="_blank">
          Instagram Lite
        </Link>
        <Link to="https://www.threads.net/login" target="_blank">
          Threads
        </Link>
        <Link
          to="https://www.facebook.com/help/instagram/261704639352628"
          target="_blank"
        >
          Contact uploading and non-usera
        </Link>
        <Link
          to="https://about.meta.com/technologies/meta-verified/"
          target="_blank"
        >
          Meta Verified
        </Link>
      </div>
      <div className="FooterCopy mt-3 text-center">
        © 2023 Instagram from Meta
      </div>
    </div>
  );
}

export default LoginFooter;
