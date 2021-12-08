import PropTypes from 'prop-types';
import Profile from './Profile';

export default function ProfileList({ items }) {
    return (
        <ul>
            {items.map(item => (
                <li key={item.username}>
                    <Profile
                        username={item.username}
                        tag={item.tag}
                        location={item.location}
                        avatar={item.avatar}
                        statFollowers={item.stats.followers}
                        statViews={item.stats.views}
                        statLikes={item.stats.likes}
                    />
                </li>
            ))}
        </ul>
    );
}

ProfileList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,  
    }))
}


