import PropTypes from 'prop-types';
import Profile from './Profile';
import s from './Profile.module.css';

export default function ProfileList({ items }) {
  return (
    <div className={s.profile}>
      {items.map(item => (
        <Profile
          key={item.username}
          username={item.username}
          tag={item.tag}
          location={item.location}
          avatar={item.avatar}
          statFollowers={item.stats.followers}
          statViews={item.stats.views}
          statLikes={item.stats.likes}
        />
      ))}
    </div>
  );
}

ProfileList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
    }),
  ),
};
