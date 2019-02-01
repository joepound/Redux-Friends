import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const FriendDisplay = props => {
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
  })
};

const mapStateToProps = state => {
  return {
    selectedFriend: state.friendsReducer.selectedFriend
  };
};

export default connect(mapStateToProps)(FriendDisplay);
