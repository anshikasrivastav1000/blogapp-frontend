import React from 'react'

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>
        <strong>Post ID:</strong> {post.postId}
      </p>
    </div>
  );
};

export default PostCard
