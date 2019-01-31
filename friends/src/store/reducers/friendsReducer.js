import {
  HANDLE_TEXT_INPUT_CHANGE,
  FETCH_FRIENDS_START,
  FETCH_FRIENDS_SUCCESS,
  FETCH_FRIENDS_FAILURE,
  ADD_FRIEND_START,
  ADD_FRIEND_FAILURE,
  ADD_FRIEND_SUCCESS,
  DELETE_FRIEND_START,
  DELETE_FRIEND_SUCCESS,
  DELETE_FRIEND_FAILURE
} from "../actions/types";

let initialState = {
  newName: "",
  newAge: "",
  newEmail: "",
  friends: [],
  isFetchingFriends: false,
  hasFetchedFriends: false,
  isSavingFriend: false,
  hasSavedFriend: false,
  isDeletingFriend: false,
  hasDeletedFriend: false,
  isUpdatingFriend: false,
  hasUpdatedFriend: false,
  error: null
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default friendsReducer;
