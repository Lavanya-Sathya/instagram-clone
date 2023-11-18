import { useState } from "react";
import "./timeline.css";
import Sugesstions from "./Sugesstions";
import Post from "./post/Post";
import post1 from "@/image/post/post1.jpg";
import post2 from "@/image/post/post2.jpg";
import post3 from "@/image/post/post3.jpg";
import post4 from "@/image/post/post4.jpg";

function Timeline() {
  <div></div>;
  const [posts, setPosts] = useState([
    {
      user: "escapeTime",
      postImage: post1,
      likes: 12,
      timestamp: "2d",
      caption: "Photography for life",
    },
    {
      user: "john",
      postImage: post2,
      likes: 134,
      timestamp: "1d",
      caption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, odio",
    },
    {
      user: "sathya_",
      postImage: post3,
      likes: 98,
      timestamp: "12h",

      caption:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis exercitationem delectus saepe doloribus odio similique minima quidem alias voluptate adipisci?",
    },
    {
      user: "kenny",
      postImage: post4,
      likes: 189,
      timestamp: "2h",
      caption: "Lorem ipsum dolor sit amet.",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timelineLeft mt-1">
        <div className="postTimeline mb-5">
          {posts.map((post) => (
            <Post
              key={post.user}
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
              caption={post.caption}
            />
          ))}
        </div>
      </div>
      <div className="timelineRight">
        <div className="sugesstionTime d-flex align-items-center justify-content-between p-2 mb-3">
          <p className="h6 mb-0">Suggested for you</p>
          <a href="" className="text-decoration-none">
            See All
          </a>
        </div>
        <Sugesstions />
        <Sugesstions />
        <Sugesstions />
      </div>
    </div>
  );
}

export default Timeline;
