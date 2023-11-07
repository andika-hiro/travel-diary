import { GET_ALL_POST, SET_ALL_POST, CREATE_POST, SET_NEW_POST } from "./constants";

export const getAllPost = () => ({
  type: GET_ALL_POST,
});

export const setAllPost = (posts) => ({
  type: SET_ALL_POST,
  posts,
});

export const createPost = (post) => ({
  type: CREATE_POST,
  post,
});

export const setNewPost = (post) => ({
  type: SET_NEW_POST,
  post,
});
