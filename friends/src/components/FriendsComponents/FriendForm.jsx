import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { handleTextInputChange, addFriend } from "../../store/actions";

const FriendForm = props => {
  const addFriend = e => {
    // Check for empty name input
    if (!props.newName) {
      alert("Please enter a name for your friend first.");
    } else if (!props.newAge) {
      // Check for empty age input
      alert("Please enter an age value for your friend first.");
    } else if (!props.newEmail) {
      // Check for empty email input
      alert("Please enter an email address for your friend first.");
    } else if (isNaN(props.newAge) || props.newAge < 0) {
      alert("Please enter a valid age value.");
    } else {
      props.addFriend(props.newName, props.newAge, props.newEmail);
    }
  };

  return (
    <form className="friends-app__new-info-form" onSubmit={addFriend}>
      <div className="friends-app__new-info-form__field">
        <label
          className="friends-app__new-info-form__field__label"
          htmlFor="newName"
        >
          Name:
        </label>
        <input
          className="friends-app__new-info-form__field__input"
          id="newName"
          type="text"
          placeholder="Enter your friend's name"
          required
          name="newName"
          value={props.newName}
          onChange={props.handleTextInputChange}
        />
      </div>
      <div className="friends-app__new-info-form__field">
        <label
          className="friends-app__new-info-form__field__label"
          htmlFor="newAge"
        >
          Age:
        </label>
        <input
          className="friends-app__new-info-form__field__input"
          id="newAge"
          type="number"
          placeholder="Age"
          required
          name="newAge"
          value={props.newAge}
          onChange={props.handleTextInputChange}
        />
      </div>
      <div className="friends-app__new-info-form__field">
        <label
          className="friends-app__new-info-form__field__label"
          htmlFor="newEmail"
        >
          Name:
        </label>
        <input
          className="friends-app__new-info-form__field__input"
          id="newEmail"
          type="email"
          placeholder="Enter your friend's email address"
          required
          name="newEmail"
          value={props.newEmail}
          onChange={props.handleTextInputChange}
        />
      </div>
      <div className="friends-app__new-info-form__action-buttons">
        <div>Clear</div>
        <button>Add Friend</button>
      </div>
    </form>
  );
};

FriendForm.propTypes = {
  newName: PropTypes.string.isRequired,
  // Allow string type to be able to set controlled age input to be empty
  newAge: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  newEmail: PropTypes.string.isRequired,
  handleTextInputChange: PropTypes.func.isRequired,
  addFriend: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    newName: state.friendsReducer.newName,
    newAge: state.friendsReducer.newAge,
    newEmail: state.friendsReducer.newEmail
  };
};

export default connect(
  mapStateToProps,
  {
    handleTextInputChange,
    addFriend
  }
)(FriendForm);
