import React from "react";
import styles from "./FriendListItem.module.css";

function FriendsListItem({ friend }) {
  const { avatar, name, isOnline } = friend;
  return (
    <li className={styles.friendsItem}>
      <span
        style={{ backgroundColor: isOnline ? "green" : "red" }}
        className={styles.status}
      >
        {isOnline}
      </span>
      <img className={styles.avatar} src={avatar} alt="" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendsListItem.defaultProps = {
  avatar: "../img/avatar-placeholder-128x128.png",
};

export default FriendsListItem;
