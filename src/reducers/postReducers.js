import {
  ADD_POST_FAIL,
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  POST_DETAILS_FAIL,
  POST_DETAILS_REQUEST,
  POST_DETAILS_SUCCESS,
} from "../constants/postConstants";


export const addPostReducer = (state = { post: {} }, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return { loading: true };
    case ADD_POST_SUCCESS:
      return { loading: false, post: action.payload };
    case ADD_POST_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};

export const postDetailsReducer = (state = { post: {} }, action) => {
  switch (action.type) {
    case POST_DETAILS_REQUEST:
      return { loading: true, ...state };
    case POST_DETAILS_SUCCESS:
      return { loading: false, post: action.payload };
    case POST_DETAILS_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
