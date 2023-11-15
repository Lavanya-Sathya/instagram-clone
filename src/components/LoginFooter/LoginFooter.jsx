import React from "react";
import "./LoginFooter.css";
function LoginFooter() {
  return (
    <div className="loginFooter m-3">
      <div
        className="footerLinks pt-4 d-flex
      gap-3 justify-content-center flex-wrap"
      >
        <a href="https://about.meta.com/" target="_blank">
          Meta
        </a>
        <a href="https://about.instagram.com/" target="_blank">
          About
        </a>
        <a href="https://about.instagram.com/en_US/blog" target="_blank">
          Blog
        </a>
        <a href="https://about.instagram.com/about-us/careers" target="_blank">
          Jobs
        </a>
        <a href="https://help.instagram.com/" target="_blank">
          Help
        </a>
        <a
          href="https://developers.facebook.com/docs/instagram"
          target="_blank"
        >
          API
        </a>
        <a
          href="https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect"
          target="_blank"
        >
          Privacy
        </a>
        <a href="https://help.instagram.com/581066165581870/" target="_blank">
          Terms
        </a>
        <a href="https://www.instagram.com/explore/locations/" target="_blank">
          Locations
        </a>
        <a href="https://www.instagram.com/web/lite/" target="_blank">
          Instagram Lite
        </a>
        <a href="https://www.threads.net/login" target="_blank">
          Threads
        </a>
        <a
          href="https://www.facebook.com/help/instagram/261704639352628"
          target="_blank"
        >
          Contact uploading and non-usera
        </a>
        <a
          href="https://about.meta.com/technologies/meta-verified/"
          target="_blank"
        >
          Meta Verified
        </a>
      </div>
      <div className="FooterCopy mt-3 text-center">
        © 2023 Instagram from Meta
      </div>
    </div>
  );
}

export default LoginFooter;
