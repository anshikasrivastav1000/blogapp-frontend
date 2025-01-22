import axios from "axios";

const API = axios.create({baseURL: 'http://localhost:8080/api'});

export const create =(userId,categoryId,postData) =>
    API.post(`/users/${userId}/categories/${categoryId}/posts`, postData);

//GET POST BY USER

export const getPostsByUser = (userId) =>
    API.get(`/users/${userId}/posts`);

//get post by category

export const getPostsByCategory = (categoryId) =>
    API.get(`/categories/${categoryId}/posts`);

//GET ALL POSTS
export const getAllPosts = (pageNumber = 0, pageSize = 1000, sortBy = "postId") => {
    return API.get(`/posts`, { params: { pageNumber, pageSize, sortBy } });
  };

//GET POST BY ID
export const getPostById = (postId) =>
    API.get(`/posts/${postId}`);

//DELETE POST

export const deletePost = (postId) =>
    API.delete(`/posts/${postId}`);

//UPDATE POST

export const updatePost = (postId, postData) =>
    API.put(`/posts/${postId}`, postData);

//SEARCH POSTS
export const searchPosts =(keywords) => API.get(`/posts/search/${keywords}`);

//UPLOAD POST IMAGE

export const uploadPostImage = (postId, image) => {
    const formData = new FormData();
    formData.append("image", image);
    return API.post(`/post/image/upload/${postId}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  };

  /// Download image (returns URL)
export const getPostImageUrl = (imageName) => `/api/post/image/${imageName}`;