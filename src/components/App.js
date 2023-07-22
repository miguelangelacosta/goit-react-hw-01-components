import React from "react";
import Profile from "./Profile/Profile";
import user from '../json/user.json';
import Statistics from "./statistics/Statistics";
import data from '../json/data.json';
import FriendList from './Friendlist/FriendList';
import friends from '../json/friends.json';
import TransactionHistory from './TransactionaHistory/TransactionHistory';
import transactions from '../json/transactions.json';

const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      {/* Opción sin título */}
      <Statistics stats={data} />

      <div>
        <FriendList friends={friends} />
      </div>

      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
