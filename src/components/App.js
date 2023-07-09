import React from "react";
import Profile from "./Profile";
import Statistics from "./Statistics";
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';

const App = () => {
  const user = {
    username: "Jacques Gluke",
    tag: "jgluke",
    location: "Ocho Rios, Jamaica",
    avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };

  const data = [
    { id: "id-1", label: ".docx", percentage: 22 },
    { id: "id-2", label: ".pdf", percentage: 4 },
    { id: "id-3", label: ".mp3", percentage: 17 },
    { id: "id-4", label: ".psd", percentage: 47 },
    { id: "id-5", label: ".pdf", percentage: 10 },
  ];

  const friends = [
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
      name: "Mango",
      isOnline: true,
      id: 1812,
    },
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/616/616438.png",
      name: "Kiwi",
      isOnline: false,
      id: 1137,
    },
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/1623/1623681.png",
      name: "Ajax",
      isOnline: true,
      id: 1213,
    },
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/2977/2977285.png",
      name: "Jay",
      isOnline: true,
      id: 1714,
    },
    {
      avatar: "https://cdn-icons-png.flaticon.com/512/1998/1998749.png",
      name: "Poly",
      isOnline: false,
      id: 1284,
    },
  ];

  const transactions = [
    {
      "id": "1e0700a2-5183-4291-85cc-2065a036a683",
      "type": "invoice",
      "amount": "964.82",
      "currency": "LRD"
    },
    // ...rest of the transaction data
  ];

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
        <h1>Lista de Amigos</h1>
        <FriendList friends={friends} />
      </div>

      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
