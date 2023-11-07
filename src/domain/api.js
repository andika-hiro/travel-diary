import axios from "axios";

const baseURL = "http://localhost:3000/";

const urls = {
  posts: "posts",
  users: "users",
};

export const callAPI = async (endpoint, method, params = {}, headers = {}, data = {}) => {
  const options = {
    baseURL,
    url: endpoint,
    method,
    params,
    headers,
    data,
  };

  const response = await axios(options);
  return response?.data;
};

export const getAllPost = () => {
  return callAPI(urls.posts, "GET");
};

export const createPost = (post) => {
  return callAPI(urls.posts, "POST", {}, {}, post);
};
export const register = (data) => {
  return callAPI(urls.users, "POST", {}, {}, data);
};

export const getAllUsers = () => {
  return callAPI(urls.users, "GET");
};
