import React from "react";

import { HeaderContainer } from "./components/HeaderComponents";
import { FriendsContainer } from "./components/FriendsComponents";

const App = props => {
  return (
    <div className="friends-app">
      <HeaderContainer />
      <FriendsContainer />
    </div>
  );
};

export default App;
