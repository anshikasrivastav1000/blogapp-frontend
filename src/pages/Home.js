import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../componets/PostCard"
const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/posts?pageNumber=0&pageSize=10&sortBy=postId");
        console.log(response); 
        setPosts(response); 
        console.log("updated",posts)
      
      } catch (error) {
        console.error('Error fetching posts:',error);
      }
    };

    fetchPosts();
  }, []); 
  return (
    <div>
    {posts.length > 0 ? (
      posts.map((post) => <PostCard key={post.postId} post={post} />)
    ) : (
      <p>No posts available.</p>
    )}
  </div>
  );

  

};



export default Home;
//"http://localhost:8080/api/posts?pageNumber=0&pageSize=10&sortBy=postId"