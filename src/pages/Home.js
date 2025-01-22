import React, { useState, useEffect } from "react";
import { getAllPosts } from "../services/api";
import PostCard from "../componets/PostCard";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts(0, 10, "title")
    .then((res) => {
        setPosts(res.data.content || []);
        setLoading(false);
    })
    .catch((err) => {
        console.error("Error fetching posts:", err);
        setLoading(false);
    })
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard key={post.postId} post={post} />
      ))}
    </div>
  );
};

export default Home;
