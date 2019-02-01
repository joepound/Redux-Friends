import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getFriends } from "../../store/actions";

class FriendSelector extends Component {
  static propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        // Allow string type to be able to set controlled age input to be empty
        age: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
          .isRequired,
        email: PropTypes.string.isRequired
      })
    ).isRequired,
    getFriends: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="friends-app__select-friend">
        <label htmlFor="smurfSelect">Your Friend List:</label>
        <select className="friends-app__select-friend__dropdown">
          <option
            className="friends-app__select-friend__dropdown__option"
            defaultValue
            hidden
          >
            Select a friend
          </option>
          {this.props.friends.map(friend => (
            <option
              className="friends-app__select-friend__dropdown__option"
              key={friend.id}
              value={friend.name}
            >
              {friend.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friendsReducer.friends
  };
};

export default connect(
  mapStateToProps,
  {
    getFriends
  }
)(FriendSelector);
