import PropTypes from 'prop-types';

export default function FriendListItem({
    isOnline,
    avatar,
    name}) {
  
  return <ul class="friend-list">
    <li class="item">
        <span class="status">{isOnline}</span>
        <img class="avatar"
            src={avatar}
            alt="User avatar"
            width="48" />
          <p class="name">{name}</p>
    </li>
</ul>  
}

FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}