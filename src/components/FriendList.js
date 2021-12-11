import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

export default function FriendList ({ items }) {
    return (
        <ul class="friend-list">
            {items.map(item => (
                <li class="item" key={item.id}>
                    <FriendListItem
                        avatar={item.avatar}
                        name={item.name}
                        isOnline={item.isOnline}
                    />
                </li>
            ))}
        </ul>
    );
}

FriendListItem.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
}