import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendlistLtem';
import styles from './Friendlist.module.css';
  

const FriendList = ({ friends }) => {
  return (
    <ul className={styles['friend-list']}>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
