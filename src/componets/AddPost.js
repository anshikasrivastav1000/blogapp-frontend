import React, { useState } from "react";
import axios from "axios";

const AddPost = ({ onPostAdded }) => {
    const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) formData.append("image", image);

    try {
      const res = await axios.post("http://localhost:8080/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Post created:", res.data);
      onPostAdded(res.data.post); // Call parent function to update posts list
      setTitle("");
      setContent("");
      setImage(null);
    } catch (err) {
      console.error("Error creating post:", err);
      setError("Failed to create post.");
    } finally {
      setLoading(false);
    }
   
  };
  const handlePostAdded = (newPost) => {
    setPosts([newPost, ...posts]); // Add new post to the top of the list
  };
  



  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>Add Post</h2>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Image (optional):</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <button  onPostAdded={handlePostAdded} type="submit" disabled={loading}>
        {loading ? "Adding..." : "Add Post"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default AddPost;
