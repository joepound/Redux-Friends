import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { deleteFriend } from "../../store/actions";

const FriendDisplay = props => {
  const deleteFriend = e => {
    window.confirm(
      `Are you sure you want to delete ${props.selectedFriend.firstname} ${
        props.selectedFriend.lastname
      } from your friends list?`
    ) && props.deleteFriend(props.selectedFriend.id);
  };

  return props.selectedFriend ? (
    <div>
      <h2>{`${props.selectedFriend.firstname} ${
        props.selectedFriend.lastname
      }`}</h2>
      <div>
        <span>Age: </span>
        <span>{props.selectedFriend.age}</span>
      </div>
      <div>
        <span>Email address: </span>
        <span>{props.selectedFriend.email}</span>
      </div>
      <div>
        <button type="button" onClick={deleteFriend}>
          Delete Friend
        </button>
      </div>
    </div>
  ) : (
    <div>(select a friend to display)</div>
  );
};

FriendDisplay.propTypes = {
  selectedFriend: PropTypes.shape({
    id: PropTypes.string,
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    age: PropTypes.number,
    email: PropTypes.string
  }),
  deleteFriend: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    selectedFriend: state.friendsReducer.selectedFriend
  };
};

export default connect(
  mapStateToProps,
  {
    deleteFriend
  }
)(FriendDisplay);
