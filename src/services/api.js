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
export const getAllPosts = (pageNumber,pageSize,sortBy) =>
    API.get(`/posts`,{params: {pageNumber,pageSize, sortBy}});

//GET POST BY ID
export const getPostById = (postId) =>
    API.get(`/posts/${postId}`);

//DELETE POST

export const deletePost = (postId) =>
    API.delete(`/posts/${postId}`);