import axios from "axios";

import {
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE,
  HANDLE_TEXT_INPUT_CHANGE,
  ADD_FRIEND_START,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILURE,
  SELECT_FRIEND_START,
  SELECT_FRIEND_SUCCESS,
  SELECT_FRIEND_FAILURE,
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
    .catch(err => dispatch({ type: FETCH_FRIENDS_FAILURE, payload: err }));
};

export const handleTextInputChange = e => dispatch =>
  dispatch({
    type: HANDLE_TEXT_INPUT_CHANGE,
    payload: e.target
  });

export const addFriend = (firstname, lastname, age, email) => dispatch => {
  dispatch({ type: ADD_FRIEND_START });
  axios
    // Quickly convert age from input string to number with shorthand (+) sign
    .post(`${baseURL}/api/friends`, { firstname, lastname, age: +age, email })
    .then(res => dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_FRIEND_FAILURE, payload: err }));
};

export const queryFriendInfo = e => dispatch => {
  dispatch({ type: SELECT_FRIEND_START });
  axios
    .get(`${baseURL}/api/friends/${e.currentTarget.value}`)
    .then(res => dispatch({ type: SELECT_FRIEND_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: SELECT_FRIEND_FAILURE, payload: err }));
};

export const deleteFriend = id => dispatch => {
  dispatch({ type: DELETE_FRIEND_START });
  axios
    .delete(`${baseURL}/api/friends/${id}`)
    .then(res => dispatch({ type: DELETE_FRIEND_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: DELETE_FRIEND_FAILURE, payload: err }));
};
