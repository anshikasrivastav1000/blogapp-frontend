import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPostById } from "../services/api";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostById(id).then((res) => setPost(res.data));
  }, [id]);

  return (
    <div>
      {post ? (
        <>
          <h1>{post.title}</h1>
          <img src={post.imageName ? `/api/post/image/${post.imageName}` : ""} alt={post.title} />
          <p>{post.content}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostDetails;
