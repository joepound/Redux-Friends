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
} from "../actions/types";

let initialState = {
  newFirstName: "",
  newLastName: "",
  newAge: "",
  newEmail: "",
  friends: [],
  selectedFriend: null,
  isFetchingFriends: false,
  hasFetchedFriends: false,
  isSavingFriend: false,
  hasSavedFriend: false,
  isQueryingFriend: false,
  hasQueriedFriend: false,
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
    case ADD_FRIEND_START:
      return {
        ...state,
        isSavingFriend: true,
        hasSavedFriend: false,
        error: null
      };
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        isSavingFriend: false,
        hasSavedFriend: true,
        newFirstName: "",
        newLastName: "",
        newAge: "",
        newEmail: ""
      };
    case ADD_FRIEND_FAILURE:
      return {
        ...state,
        isSavingFriend: false,
        error: action.payload
      };
    case SELECT_FRIEND_START:
      return {
        ...state,
        isQueryingFriend: true,
        hasQueriedFriend: false,
        error: null
      };
    case SELECT_FRIEND_SUCCESS:
      return {
        ...state,
        isQueryingFriend: false,
        hasQueriedFriend: true,
        selectedFriend: action.payload
      };
    case SELECT_FRIEND_FAILURE:
      return {
        ...state,
        isQueryingFriend: false,
        error: action.payload
      };
    case DELETE_FRIEND_START:
      return {
        ...state,
        isDeletingFriend: true,
        hasDeletedFriend: false,
        error: null
      };
    case DELETE_FRIEND_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        selectedFriend: null,
        isDeletingFriend: false,
        hasDeletedFriend: true,
        newFirstName: "",
        newLastName: "",
        newAge: "",
        newEmail: ""
      };
    case DELETE_FRIEND_FAILURE:
      return {
        ...state,
        isDeletingFriend: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default friendsReducer;
