import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { friendList } from './Friend.module.css';
export default function FriendList({ friends }) {
  return (
    <ul className={friendList}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shapeOf({
      id: PropTypes.string,
    }),
  ).isRequired,
};
