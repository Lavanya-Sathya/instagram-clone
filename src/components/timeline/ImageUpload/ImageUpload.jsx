import React, { useState } from "react";
import "./ImageUpload.css";
import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, db } from "../../Firebase/Firebase";

function ImageUpload({ user }) {
  const userProfile = user?.data?.username;
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  const handleChangeFile = (e) => {
    if (e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type.startsWith("image/")) {
        // It's an image file
        setImage(e.target.files[0]);
      } else if (selectedFile.type.startsWith("video/")) {
        // It's a video file
        setVideo(e.target.files[0]);
      } else {
        // It's neither an image nor a video
        alert("Please select either an image or a video file.");
      }
    }
  };
  const handleUpload = () => {
    if (!image && !video) {
      // Ensure there is a selected image before proceeding with the upload
      alert("No image or video is selected for upload.");
      return;
    }
    const timestamp = new Date();

    const storageRef = ref(
      storage,
      image
        ? `images/${timestamp}_${image.name}`
        : `videos/${timestamp}_${video.name}`
    );

    uploadBytes(storageRef, image || video)
      .then((snapshot) => {
        // Return a Promise that resolves with the download URL
        return getDownloadURL(snapshot.ref);
      })
      .then((url) => {
        // Upload complete
        alert("Post Uploaded Successfully!");

        // Post information to Firestore
        addDoc(collection(db, "posts"), {
          timestamp: serverTimestamp(),
          caption: caption,
          postImage: url,
          user: userProfile,
          type: image ? "image" : "video",
        });

        setImage(null);
        setCaption("");
      })
      .catch((error) => {
        // Handle errors during the upload
        console.error("Error during upload:", error);
        alert(error.message);
      });
  };
  return (
    <div className="ImageUploadContainer">
      <h3>Create Your Post</h3>
      <div className="ImagePost">
        <input
          type="text"
          name="caption"
          id="caption"
          className="form-control mt-5 mb-2"
          placeholder="Enter a caption..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        <input
          type="file"
          name="postImage"
          id="postImage"
          className="form-control mt-4 mb-2"
          onChange={handleChangeFile}
          accept="image/*,video/*"
        />
        <button className="ImageUploadBtn" onClick={handleUpload}>
          Upload
        </button>
      </div>
    </div>
  );
}

export default ImageUpload;
