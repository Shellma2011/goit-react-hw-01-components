import PropTypes from 'prop-types';
import s from './Friend.module.css';

export default function FriendListItem({ friend }) {
  const { name, avatar, isOnline } = friend;
  return (
    <li className={s.item}>
      {isOnline ? <span className={s.online}></span> : <span className={s.offline}></span>}
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
