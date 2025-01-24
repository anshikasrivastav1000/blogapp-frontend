import React from "react";
import "./PostCard.css";

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <h2 className="post-card-title">{post.title}</h2>
      <p className="post-card-content">{post.content}</p>
    </div>
  );
};

export default PostCard;
