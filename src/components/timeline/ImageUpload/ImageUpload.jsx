import React, { useState } from "react";
import "./ImageUpload.css";
import { collection, serverTimestamp, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, db } from "../../Firebase/Firebase";

function ImageUpload() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);

  const handleChangeFile = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    if (!image) {
      // Ensure there is a selected image before proceeding with the upload
      alert("No image selected for upload.");
      return;
    }
    const storageRef = ref(storage, `images/${image.name}`);

    uploadBytes(storageRef, image)
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
          user: "escapeTime",
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
        />
        <button className="ImageUploadBtn" onClick={handleUpload}>
          Upload
        </button>
      </div>
    </div>
  );
}

export default ImageUpload;
