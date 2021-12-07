// import PropTypes from 'prop-types';
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

// ProfileList.propTypes = {
//     avatar: PropTypes.string,
//     username: PropTypes.string.isRequired,
//     tag: PropTypes.string.isRequired,
//     location: PropTypes.string.isRequired,
//     statFollowers: PropTypes.number.isRequired,
//     statViews: PropTypes.number.isRequired,
//     statLikes: PropTypes.number.isRequired,
// }


