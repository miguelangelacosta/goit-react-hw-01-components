import React from "react";
import Profile from "./Profile";
import user from '../json/user.json';
import Statistics from "./Statistics";
import data from '../json/data.json';
import FriendList from './FriendList';
import friends from '../json/friends.json';
import TransactionHistory from './TransactionHistory';
import transactions from '../json/transactions.json';

const App = () => {
  return (
    <container>
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
        <h1>Lista de Amigos</h1>
        <FriendList friends={friends} />
      </div>

      <TransactionHistory items={transactions} />
    </container>
  );
};

export default App;
