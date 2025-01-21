import axios from 'axios';
import { API_URL, PAGE_SIZE } from '../constants';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchUsers = () => api.get('/users');
export const fetchUserDetails = (id) => api.get(`/users/${id}`);
export const fetchUserPosts = (id, start = 0, limit = PAGE_SIZE) =>
  api.get(`/posts`, { params: { userId: id, _start: start, _limit: limit } });
export const addPost = (post) => api.post('/posts', post);
export const deletePost = (id) => api.delete(`/posts/${id}`);