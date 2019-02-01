import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { handleTextInputChange } from "../../store/actions";

const FriendForm = props => {
  return (
    <form className="friends-app__new-info-form">
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
        <div>Add Friend</div>
      </div>
    </form>
  );
};

FriendForm.propTypes = {
  newName: PropTypes.string.isRequired,
  newAge: PropTypes.number.isRequired,
  newEmail: PropTypes.string.isRequired,
  handleTextInputChange: PropTypes.func.isRequired
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
    handleTextInputChange
  }
)(FriendForm);
