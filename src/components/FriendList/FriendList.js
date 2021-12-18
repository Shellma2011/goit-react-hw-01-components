import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { friendList } from './Friend.module.css';
function FriendList({ friends }) {
  return (
    <ul className={friendList}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}
FriendList.propTypes = { friends: PropTypes.arrayOf(PropTypes.any).isRequired };
export default FriendList;
