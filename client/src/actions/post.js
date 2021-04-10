import axios from "axios";
import { setAlert } from "./alert";

import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST
} from "./types";

// Get Post
export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get("/api/posts");
    dispatch({
      type: GET_POSTS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};
// Add Like
export const addLike = post_id => async dispatch => {
  try {
    const res = await axios.put(`/api/posts/like/${post_id}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: { post_id, likes: res.data }
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// Remove Like
export const removeLike = post_id => async dispatch => {
  try {
    const res = await axios.put(`/api/posts/unlike/${post_id}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: { post_id, likes: res.data }
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// Delete Post
export const deletePost = post_id => async dispatch => {
  try {
    const res = await axios.delete(`/api/posts/${post_id}`);
    dispatch({
      type: DELETE_POST,
      payload: post_id
    });
    dispatch(setAlert("Post Removed", "success"));
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// Add Post
export const addPost = formData => async dispatch => {
  const config = {
    header: {
      "Content-Types": "application/json"
    }
  };
  try {
    const res = await axios.post("/api/posts/", formData, config);
    dispatch({
      type: ADD_POST,
      payload: res.data
    });
    dispatch(setAlert("Post Created", "success"));
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};
