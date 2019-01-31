import axios from "axios";

import {
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE,
  HANDLE_TEXT_INPUT_CHANGE,
  ADD_FRIEND_START,
  ADD_FRIEND_FAILURE,
  ADD_FRIEND_SUCCESS,
  DELETE_FRIEND_START,
  DELETE_FRIEND_SUCCESS,
  DELETE_FRIEND_FAILURE,
  UPDATE_FRIEND_START,
  UPDATE_FRIEND_SUCCESS,
  UPDATE_FRIEND_FAILURE
} from "./types";

const baseURL = "http://localhost:5000";

export const getFriends = () => dispatch => {
  dispatch({ type: FETCH_FRIENDS_START });
  axios
    .get(`${baseURL}/api/friends`)
    .then(res => dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: FETCH_FRIENDS_FAILURE, payload: error }));
};

export const handleTextInputChange = e => dispatch => ({
  type: HANDLE_TEXT_INPUT_CHANGE,
  payload: e
});
