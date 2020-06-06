import React from "react";
import Profile from "./Profile/Profile";
import user from "../json/user.json";
import Statistics from "./Statistics/Statistics";
import statData from "../json/stat-data.json";
import FriendList from "./FriendList/FriendList";
import friends from "../json/friends.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "../json/transactions.json";

export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
