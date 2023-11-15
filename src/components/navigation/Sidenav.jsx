import React from "react";
import "./sidenav.css";
import HomeIcon from "@mui/icons-material/Home";

function Sidenav() {
  return (
    <div className="sidenav">
      <img
        className="sidenav__logo"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Instagram Logo"
      />
      <div>
        <HomeIcon />
      </div>
    </div>
  );
}

export default Sidenav;
