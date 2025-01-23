import React from "react";

const PostCard = ({ post }) => {
  return (
    <div>
        <h2>here is post</h2>
    <h2>{post.title}</h2>
    <p>{post.content}</p>
  </div>

  );
};

export default PostCard;
