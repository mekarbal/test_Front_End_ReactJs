import axios from "axios";
import {
  ADD_POST_FAIL,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  POST_DETAILS_FAIL,
  POST_DETAILS_REQUEST,
  POST_DETAILS_SUCCESS,
} from "../constants/postConstants";

export const addPost = (title, body) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_POST_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/posts/",
      { title, body },
      config
    );

    dispatch({
      type: ADD_POST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_POST_FAIL,
      payload: error,
    });
  }
};

export const postDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: POST_DETAILS_REQUEST });
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    dispatch({
      type: POST_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: POST_DETAILS_FAIL,
      payload: error,
    });
  }
};
