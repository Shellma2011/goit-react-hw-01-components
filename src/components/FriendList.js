import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

export default function FriendList ({ items }) {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
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