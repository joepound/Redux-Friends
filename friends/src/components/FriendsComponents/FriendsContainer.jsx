import React from "react";

import FriendForm from "./FriendForm";
import FriendSelector from "./FriendSelector";
import FriendDisplay from "./FriendDisplay";

const FriendsContainer = props => {
  return (
    <>
      <FriendForm />
      <FriendSelector />
      <FriendDisplay />
    </>
  );
};

export default FriendsContainer;
