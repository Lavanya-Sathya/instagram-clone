import React from "react";
import "./Explore.css";
import img1 from "@/image/explore/img1.jpg";
import img2 from "@/image/explore/img2.jpg";
import img3 from "@/image/explore/img3.jpg";
import img4 from "@/image/explore/img4.jpg";
import img5 from "@/image/explore/img5.jpg";
import img6 from "@/image/explore/img6.jpg";
import img7 from "@/image/explore/img7.jpg";
import img8 from "@/image/explore/img8.jpg";
import img9 from "@/image/explore/img9.jpg";
import img10 from "@/image/explore/img10.jpg";

export default function Explore() {
  return (
    <div className="exploreContainer">
      <div className="gridContainer">
        <div className="grid">
          <img src={img1} alt="image" />
        </div>
        <div className="grid">
          <img src={img2} alt="image" />
        </div>
        <div className="grid">
          <img src={img3} alt="image" />
        </div>
        <div className="grid">
          <img src={img4} alt="image" />
        </div>
        <div className="grid">
          <img src={img5} alt="image" />
        </div>
        <div className="grid">
          <img src={img6} alt="image" />
        </div>
        <div className="grid">
          <img src={img7} alt="image" />
        </div>
        <div className="grid">
          <img src={img8} alt="image" />
        </div>
        <div className="grid">
          <img src={img9} alt="image" />
        </div>
        <div className="grid">
          <img src={img10} alt="image" />
        </div>
      </div>
    </div>
  );
}
