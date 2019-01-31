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
    case FETCH_FRIENDS_START:
      return {
        ...state,
        isFetchingFriends: false,
        hasFetchedFriends: false,
        error: null
      };
    case FETCH_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        isFetchingFriends: false,
        hasFetchedFriends: true
      };
    case FETCH_FRIENDS_FAILURE:
      return {
        ...state,
        isFetchingFriends: false,
        error: action.payload
      };
    case HANDLE_TEXT_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    default:
      return state;
  }
};

export default friendsReducer;
